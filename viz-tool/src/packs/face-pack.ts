import { strobeNightPack } from './strobe-night';
import type { AssetPack } from './types';

export const facePack: AssetPack = {
  id: 'face-pack',
  name: 'Face Pack',
  description:
    'Punch face stills into drops and choruses. Upload your own PNGs for best results.',
  rules: [
    {
      id: 'face-flash-onset',
      trigger: 'onset',
      threshold: 0.25,
      durationMs: 220,
      effect: 'flash-image',
      blend: 'source-over',
      useFaceAssets: true,
      intensity: 1,
    },
    {
      id: 'face-hard-cut',
      trigger: 'onset',
      threshold: 0.35,
      durationMs: 50,
      effect: 'hard-cut',
      intensity: 1,
    },
    {
      id: 'face-chorus',
      trigger: 'energy',
      threshold: 0.72,
      durationMs: 380,
      effect: 'flash-image',
      blend: 'screen',
      useFaceAssets: true,
      intensity: 0.95,
    },
    {
      id: 'drop-strobe',
      trigger: 'energy',
      threshold: 0.78,
      durationMs: 60,
      effect: 'strobe',
      color: '#ffeedd',
      intensity: 0.65,
    },
    {
      id: 'bass-shake',
      trigger: 'band-low',
      threshold: 0.6,
      durationMs: 100,
      effect: 'shake',
      intensity: 0.7,
    },
    {
      id: 'hi-flicker',
      trigger: 'band-high',
      threshold: 0.65,
      durationMs: 50,
      effect: 'color-wash',
      color: '#f0abfc',
      blend: 'screen',
      intensity: 0.4,
    },
    {
      id: 'zoom-on-drop',
      trigger: 'energy',
      threshold: 0.75,
      durationMs: 280,
      effect: 'zoom-pulse',
      intensity: 0.75,
    },
  ],
};

export const ALL_PACKS = [strobeNightPack, facePack] as const;
