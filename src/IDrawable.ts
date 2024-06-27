import type { VideoBuffer } from './VideoBuffer.js';

export interface IDrawable {
  draw: (videoBuffer: VideoBuffer) => void;
}
