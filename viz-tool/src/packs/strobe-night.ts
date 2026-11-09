import type { AssetPack } from './types';

export const strobeNightPack: AssetPack = {
  id: 'strobe-night',
  name: 'Strobe Night',
  description:
    'Hard kicks, inverted cover art, and full-frame flashes locked to the beat.',
  rules: [
    {
      id: 'kick-strobe',
      trigger: 'onset',
      threshold: 0.35,
      durationMs: 70,
      effect: 'strobe',
      blend: 'lighter',
      color: '#ffffff',
      intensity: 1,
    },
    {
      id: 'bass-invert',
      trigger: 'band-low',
      threshold: 0.55,
      durationMs: 90,
      effect: 'invert',
      intensity: 0.85,
    },
    {
      id: 'energy-wash',
      trigger: 'energy',
      threshold: 0.7,
      durationMs: 180,
      effect: 'color-wash',
      blend: 'overlay',
      color: '#7dd3fc',
      intensity: 0.55,
    },
    {
      id: 'hard-cuts',
      trigger: 'onset',
      threshold: 0.5,
      durationMs: 40,
      effect: 'hard-cut',
      intensity: 0.9,
    },
    {
      id: 'zoom-pulse',
      trigger: 'section',
      threshold: 0.4,
      durationMs: 320,
      effect: 'zoom-pulse',
      intensity: 0.7,
    },
    {
      id: 'shake-drop',
      trigger: 'energy',
      threshold: 0.82,
      durationMs: 120,
      effect: 'shake',
      intensity: 0.8,
    },
  ],
};
