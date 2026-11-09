export const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

export const FRAG = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 outColor;

uniform sampler2D uArt;
uniform sampler2D uFace;
uniform float uHasArt;
uniform float uHasFace;

uniform float uTime;
uniform float uRms;
uniform float uLow;
uniform float uMid;
uniform float uHigh;
uniform float uIntensity;
uniform float uCoherence;
uniform float uWarpScale;
uniform float uFilament;
uniform float uSwirl;
uniform float uApparition;   // 0–1 continuous ghost amount
uniform float uFaceIndexBlend;
uniform float uAtmosphere;   // 0 none, 1 abyss, 2 ember, 3 ghost
uniform float uAspect;

// Up to 4 shockwaves: xy = origin, z = age seconds, w = intensity
uniform vec4 uShock0;
uniform vec4 uShock1;
uniform vec4 uShock2;
uniform vec4 uShock3;
uniform vec4 uRift; // xy origin, z age, w intensity

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

vec2 curl(vec2 p) {
  float e = 0.01;
  float n1 = fbm(p + vec2(0.0, e));
  float n2 = fbm(p - vec2(0.0, e));
  float n3 = fbm(p + vec2(e, 0.0));
  float n4 = fbm(p - vec2(e, 0.0));
  return vec2(n1 - n2, n4 - n3) / (2.0 * e);
}

vec2 applyShock(vec2 uv, vec4 shock, float force) {
  if (shock.w < 0.001) return vec2(0.0);
  float age = shock.z;
  float amp = shock.w * force;
  vec2 dir = uv - shock.xy;
  // correct aspect so rings are circular
  dir.x *= uAspect;
  float d = length(dir);
  float speed = 0.55 + uMid * 0.25;
  float radius = age * speed;
  float ring = exp(-pow((d - radius) * 14.0, 2.0));
  float fall = exp(-age * 2.2) * exp(-d * 1.1);
  vec2 n = d > 0.0001 ? dir / d : vec2(0.0);
  n.x /= uAspect;
  return n * ring * fall * amp * 0.085;
}

void main() {
  vec2 uv = vUv;
  float force = uIntensity;
  float calm = clamp(uCoherence, 0.0, 1.0);

  // Living flow field — bass = scale, mid = swirl speed, coherence = smoothness
  float flowSpeed = (0.08 + uMid * 0.35 * uSwirl) * mix(1.35, 0.55, calm);
  vec2 flowUv = uv * mix(2.8, 1.4, calm) * uWarpScale;
  flowUv += vec2(uTime * flowSpeed, uTime * flowSpeed * -0.7);
  flowUv += vec2(uLow * 0.4, -uLow * 0.25);

  vec2 warp = curl(flowUv);
  float warpAmp = (0.018 + uLow * 0.07 + uRms * 0.025) * uWarpScale * force;
  warpAmp *= mix(1.35, 0.65, calm);
  warp *= warpAmp;

  // High-band micro-tearing (filaments seed)
  float micro = (noise(uv * 55.0 + uTime * (1.5 + uHigh * 3.0)) - 0.5);
  warp += micro * uHigh * 0.012 * uFilament * force;

  // Shockwaves from onsets
  warp += applyShock(uv, uShock0, force * uWarpScale);
  warp += applyShock(uv, uShock1, force * uWarpScale);
  warp += applyShock(uv, uShock2, force * uWarpScale);
  warp += applyShock(uv, uShock3, force * uWarpScale);

  // Rift: open a seam in the field
  if (uRift.w > 0.001) {
    vec2 rd = uv - uRift.xy;
    rd.x *= uAspect;
    float d = length(rd);
    float age = uRift.z;
    float seam = exp(-abs(rd.x) * 28.0) * exp(-age * 1.8) * exp(-abs(rd.y) * 2.0);
    warp.x += sign(rd.x + 0.0001) * seam * uRift.w * 0.12 * force;
    warp.y += seam * uRift.w * 0.02;
  }

  vec2 sampleUv = clamp(uv + warp, 0.0, 1.0);

  vec3 art = vec3(0.04, 0.045, 0.06);
  if (uHasArt > 0.5) {
    art = texture(uArt, sampleUv).rgb;
  } else {
    // Procedural abyss if no art — still reacts
    float n = fbm(sampleUv * 3.0 + uTime * 0.1);
    art = mix(vec3(0.02, 0.03, 0.06), vec3(0.15, 0.05, 0.12), n + uLow * 0.3);
  }

  // Apparitions: face emerges through a living mask (never a hard cut)
  float app = clamp(uApparition, 0.0, 1.0);
  if (uHasFace > 0.5 && app > 0.001) {
    vec2 faceUv = sampleUv * mix(1.0, 0.92, app) + warp * 0.5;
    vec3 face = texture(uFace, clamp(faceUv, 0.0, 1.0)).rgb;
    // Thresholded fbm mask so it feels like breaking through matter
    float gate = fbm(sampleUv * 3.5 + vec2(uTime * 0.12, -uTime * 0.08));
    float mask = smoothstep(0.55 - app * 0.45, 0.75 - app * 0.25, gate + uMid * 0.15);
    // Preserve face alpha-ish by luminance keying dark edges lightly
    float facePresence = smoothstep(0.05, 0.25, max(face.r, max(face.g, face.b)));
    art = mix(art, face, mask * app * facePresence);
  }

  // Spectral filaments — bright ridges along the warp gradient (highs)
  float filament = length(warp) * 40.0;
  filament = smoothstep(0.15, 0.9, filament) * uHigh * uFilament * force;
  vec3 filamentCol = mix(vec3(0.45, 0.85, 1.0), vec3(1.0, 0.55, 0.35), uLow);
  art += filamentCol * filament * 0.55;

  // Atmosphere grades (subtle, not Instagram crushed)
  if (uAtmosphere > 0.5 && uAtmosphere < 1.5) {
    // abyss — deep teal shadows
    art = mix(art, art * vec3(0.75, 0.9, 1.15), 0.28);
    art *= 0.92;
  } else if (uAtmosphere > 1.5 && uAtmosphere < 2.5) {
    // ember
    art = mix(art, art * vec3(1.2, 0.85, 0.7), 0.3);
  } else if (uAtmosphere > 2.5) {
    // ghost — lift mids, cool highlights
    art = mix(art, vec3(dot(art, vec3(0.33))), 0.18);
    art = mix(art, art * vec3(0.9, 1.0, 1.2), 0.35);
  }

  // Soft vignette
  float vig = smoothstep(1.15, 0.25, length((uv - 0.5) * vec2(uAspect, 1.0)));
  art *= mix(0.55, 1.0, vig);

  // Tiny film grain from highs (texture, not noise spam)
  float grain = (hash(uv * vec2(1920.0, 1080.0) + uTime * 60.0) - 0.5) * 0.035 * (0.3 + uHigh);
  art += grain;

  outColor = vec4(clamp(art, 0.0, 1.0), 1.0);
}
`;
