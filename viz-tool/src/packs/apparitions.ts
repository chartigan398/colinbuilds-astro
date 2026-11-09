import { warpFieldPack } from './warp-field';
import type { AssetPack } from './types';

/** Faces / secondary stills emerge from inside the warp like ghosts. */
export const apparitionsPack: AssetPack = {
  id: 'apparitions',
  name: 'Apparitions',
  description:
    'Secondary stills (faces, symbols) phase through the warped art on energy peaks — dissolve in, never hard-cut.',
  warpScale: 0.85,
  shockwaveAmp: 0.65,
  filamentAmp: 0.7,
  swirl: 0.9,
  apparitions: true,
  apparitionStrength: 0.9,
  atmosphere: 'ghost',
};

export const ALL_PACKS = [warpFieldPack, apparitionsPack] as const;
