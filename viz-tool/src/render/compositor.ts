import { sampleFrameAt } from '../audio/analyze';
import { recentEvents } from '../timeline/build';
import type { Atmosphere, GlobalKnobs, Timeline } from '../packs/types';
import { FRAG, VERT } from './shaders';

export interface CompositorAssets {
  baseArt: HTMLImageElement | null;
  faces: HTMLImageElement[];
}

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) throw new Error('shader create failed');
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error(`Shader compile: ${log}`);
  }
  return sh;
}

function atmosphereId(a: Atmosphere): number {
  switch (a) {
    case 'abyss':
      return 1;
    case 'ember':
      return 2;
    case 'ghost':
      return 3;
    default:
      return 0;
  }
}

export class Compositor {
  readonly canvas: HTMLCanvasElement;
  readonly gl: WebGL2RenderingContext;
  width: number;
  height: number;

  private program: WebGLProgram;
  private vao: WebGLVertexArrayObject;
  private artTex: WebGLTexture;
  private faceTex: WebGLTexture;
  private blankTex: WebGLTexture;
  private locs: Record<string, WebGLUniformLocation | null> = {};
  private artFingerprint = '';
  private faceFingerprint = '';
  private activeFaceIndex = 0;

  constructor(canvas: HTMLCanvasElement, width = 1280, height = 720) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    canvas.width = width;
    canvas.height = height;

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    if (!gl) throw new Error('WebGL2 not available');
    this.gl = gl;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram();
    if (!prog) throw new Error('program create failed');
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error(`Program link: ${gl.getProgramInfoLog(prog)}`);
    }
    this.program = prog;

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buf = gl.createBuffer();
    const vao = gl.createVertexArray();
    if (!vao || !buf) throw new Error('vao/buffer failed');
    this.vao = vao;
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    this.artTex = this.createTexture();
    this.faceTex = this.createTexture();
    this.blankTex = this.createTexture();
    // 1x1 dark pixel
    gl.bindTexture(gl.TEXTURE_2D, this.blankTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([10, 12, 18, 255]),
    );

    const names = [
      'uArt',
      'uFace',
      'uHasArt',
      'uHasFace',
      'uTime',
      'uRms',
      'uLow',
      'uMid',
      'uHigh',
      'uIntensity',
      'uCoherence',
      'uWarpScale',
      'uFilament',
      'uSwirl',
      'uApparition',
      'uFaceIndexBlend',
      'uAtmosphere',
      'uAspect',
      'uShock0',
      'uShock1',
      'uShock2',
      'uShock3',
      'uRift',
    ];
    for (const n of names) this.locs[n] = gl.getUniformLocation(prog, n);
  }

  private createTexture(): WebGLTexture {
    const { gl } = this;
    const tex = gl.createTexture();
    if (!tex) throw new Error('texture failed');
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tex;
  }

  private uploadImage(tex: WebGLTexture, img: HTMLImageElement) {
    const { gl } = this;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  drawFrame(
    timeline: Timeline,
    t: number,
    assets: CompositorAssets,
    knobs: GlobalKnobs,
  ) {
    const { gl } = this;
    const frame = sampleFrameAt(timeline.reaction, t);
    const pack = timeline.pack;

    // Sync textures
    const artKey = assets.baseArt
      ? `${assets.baseArt.src}:${assets.baseArt.width}`
      : '';
    if (artKey !== this.artFingerprint) {
      this.artFingerprint = artKey;
      if (assets.baseArt) this.uploadImage(this.artTex, assets.baseArt);
    }

    // Continuous apparition envelope from recent events + energy
    const apps = recentEvents(timeline, t, 'apparition', 0.85);
    let apparition = 0;
    let faceIdx = this.activeFaceIndex;
    for (const e of apps) {
      const age = t - e.t;
      // Smooth in/out envelope — rise fast, linger, dissolve
      const env =
        age < 0.12
          ? age / 0.12
          : age < 0.45
            ? 1
            : Math.max(0, 1 - (age - 0.45) / 0.4);
      const v = e.intensity * env;
      if (v > apparition) {
        apparition = v;
        if (e.assetIndex !== undefined) faceIdx = e.assetIndex;
      }
    }
    // Also breathe faces in on sustained high energy when pack allows
    if (pack.apparitions && assets.faces.length) {
      apparition = Math.max(
        apparition,
        frame.rms * frame.mid * knobs.apparitionMix * pack.apparitionStrength * 0.55,
      );
    }
    apparition = Math.min(1, apparition);

    if (faceIdx !== this.activeFaceIndex || this.faceFingerprint === '') {
      this.activeFaceIndex = faceIdx;
      const face = assets.faces[faceIdx];
      if (face) {
        this.uploadImage(this.faceTex, face);
        this.faceFingerprint = `${faceIdx}:${face.width}:${face.height}`;
      }
    } else if (assets.faces[faceIdx]) {
      const face = assets.faces[faceIdx]!;
      const fp = `${faceIdx}:${face.width}:${face.height}`;
      if (fp !== this.faceFingerprint) {
        this.uploadImage(this.faceTex, face);
        this.faceFingerprint = fp;
      }
    }

    const shocks = recentEvents(timeline, t, 'shockwave', 1.4)
      .sort((a, b) => b.t - a.t)
      .slice(0, 4);
    const shockVecs = [0, 1, 2, 3].map((i) => {
      const e = shocks[i];
      if (!e) return [0, 0, 0, 0] as const;
      return [
        e.origin?.x ?? 0.5,
        e.origin?.y ?? 0.5,
        t - e.t,
        e.intensity * pack.shockwaveAmp,
      ] as const;
    });

    const rifts = recentEvents(timeline, t, 'rift', 0.9);
    const rift = rifts.sort((a, b) => b.t - a.t)[0];
    const riftVec = rift
      ? [
          rift.origin?.x ?? 0.5,
          rift.origin?.y ?? 0.5,
          t - rift.t,
          rift.intensity,
        ]
      : [0, 0, 0, 0];

    gl.viewport(0, 0, this.width, this.height);
    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(
      gl.TEXTURE_2D,
      assets.baseArt ? this.artTex : this.blankTex,
    );
    gl.uniform1i(this.locs.uArt, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(
      gl.TEXTURE_2D,
      assets.faces.length ? this.faceTex : this.blankTex,
    );
    gl.uniform1i(this.locs.uFace, 1);

    const u1 = (name: string, v: number) =>
      gl.uniform1f(this.locs[name]!, v);
    const u4 = (name: string, v: readonly number[]) =>
      gl.uniform4f(this.locs[name]!, v[0]!, v[1]!, v[2]!, v[3]!);

    u1('uHasArt', assets.baseArt ? 1 : 0);
    u1('uHasFace', assets.faces.length ? 1 : 0);
    u1('uTime', t);
    u1('uRms', frame.rms);
    u1('uLow', frame.low);
    u1('uMid', frame.mid);
    u1('uHigh', frame.high);
    u1('uIntensity', knobs.intensity);
    u1('uCoherence', knobs.coherence);
    u1('uWarpScale', pack.warpScale);
    u1('uFilament', pack.filamentAmp);
    u1('uSwirl', pack.swirl);
    u1('uApparition', apparition);
    u1('uFaceIndexBlend', 1);
    u1(
      'uAtmosphere',
      atmosphereId(
        knobs.atmosphere === 'none' ? pack.atmosphere : knobs.atmosphere,
      ),
    );
    u1('uAspect', this.width / this.height);

    u4('uShock0', shockVecs[0]!);
    u4('uShock1', shockVecs[1]!);
    u4('uShock2', shockVecs[2]!);
    u4('uShock3', shockVecs[3]!);
    u4('uRift', riftVec);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}

export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const finish = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      if (typeof img.decode === 'function') {
        img.decode().then(finish).catch(finish);
      } else {
        finish();
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Failed to load image: ${file.name}`));
    };
    img.src = url;
  });
}
