export type TriggerKind = 'onset' | 'energy' | 'section' | 'band-low' | 'band-high';

export type BlendMode =
  | 'source-over'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'difference'
  | 'lighter';

export interface PackRule {
  id: string;
  /** What drives this layer */
  trigger: TriggerKind;
  /** Minimum signal strength 0–1 to fire */
  threshold: number;
  /** How long the flash/hold lasts in ms */
  durationMs: number;
  /** Visual treatment */
  effect:
    | 'strobe'
    | 'invert'
    | 'flash-image'
    | 'zoom-pulse'
    | 'shake'
    | 'color-wash'
    | 'hard-cut';
  blend?: BlendMode;
  color?: string;
  /** Prefer user face assets when available */
  useFaceAssets?: boolean;
  /** Intensity multiplier relative to global intensity */
  intensity?: number;
}

export interface AssetPack {
  id: string;
  name: string;
  description: string;
  rules: PackRule[];
}

export interface ReactionMap {
  duration: number;
  sampleRate: number;
  /** Times (seconds) of detected onsets */
  onsets: number[];
  /** Energy envelope sampled ~30fps: { t, rms, low, mid, high } */
  frames: ReactionFrame[];
  /** Approximate section boundaries (verse/chorus-ish) */
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

export type LayerEventKind =
  | 'strobe'
  | 'invert'
  | 'flash-image'
  | 'zoom-pulse'
  | 'shake'
  | 'color-wash'
  | 'hard-cut';

export interface LayerEvent {
  id: string;
  kind: LayerEventKind;
  start: number;
  end: number;
  intensity: number;
  color?: string;
  blend?: BlendMode;
  /** Index into face/image assets when kind is flash-image */
  assetIndex?: number;
  ruleId: string;
}

export interface Timeline {
  duration: number;
  events: LayerEvent[];
  reaction: ReactionMap;
}

export type ColorGrade = 'none' | 'cold' | 'crushed';

export interface GlobalKnobs {
  intensity: number;
  cutRate: number;
  packMix: number;
  colorGrade: ColorGrade;
}

export const DEFAULT_KNOBS: GlobalKnobs = {
  intensity: 0.75,
  cutRate: 0.12,
  packMix: 0.65,
  colorGrade: 'crushed',
};
