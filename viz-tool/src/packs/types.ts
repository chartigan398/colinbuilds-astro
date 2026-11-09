export type Atmosphere = 'abyss' | 'ember' | 'ghost' | 'none';

/** Pack = personality for the warp field, not a list of flash effects. */
export interface AssetPack {
  id: string;
  name: string;
  description: string;
  /** Overall domain-warp amplitude */
  warpScale: number;
  /** How hard onset shockwaves hit the surface */
  shockwaveAmp: number;
  /** Fine spectral filament / edge energy */
  filamentAmp: number;
  /** Swirl speed multiplier from mids */
  swirl: number;
  /** Whether secondary face textures can emerge through the field */
  apparitions: boolean;
  /** How strongly faces ghost through (0–1) when apparitions on */
  apparitionStrength: number;
  atmosphere: Atmosphere;
}

export interface ReactionMap {
  duration: number;
  sampleRate: number;
  onsets: number[];
  frames: ReactionFrame[];
  sections: SectionMarker[];
  bpmEstimate: number;
}

export interface ReactionFrame {
  t: number;
  rms: number;
  low: number;
  mid: number;
  high: number;
}

export interface SectionMarker {
  t: number;
  label: 'calm' | 'build' | 'drop' | 'chorus';
  energy: number;
}

/** Discrete moments that briefly reshape the continuous field */
export type FieldEventKind = 'shockwave' | 'apparition' | 'rift';

export interface FieldEvent {
  id: string;
  kind: FieldEventKind;
  t: number;
  intensity: number;
  /** Apparition texture index */
  assetIndex?: number;
  /** Shockwave origin in UV space */
  origin?: { x: number; y: number };
}

export interface Timeline {
  duration: number;
  events: FieldEvent[];
  reaction: ReactionMap;
  pack: AssetPack;
}

export interface GlobalKnobs {
  /** How hard the music pushes the field */
  intensity: number;
  /** 0 = wild / torn, 1 = smooth / coherent */
  coherence: number;
  /** How much secondary assets (faces) can break through */
  apparitionMix: number;
  atmosphere: Atmosphere;
}

export const DEFAULT_KNOBS: GlobalKnobs = {
  intensity: 0.72,
  coherence: 0.45,
  apparitionMix: 0.7,
  atmosphere: 'abyss',
};
