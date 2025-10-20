import type { starterBalls } from '../constants/starterBalls.ts';
import type assetMap from '../lib/assetMap.ts';

export type BallIconKey = keyof typeof assetMap.ballIcons;
export type StarterBallIconKey = typeof starterBalls extends Set<infer U> ? U : never;
