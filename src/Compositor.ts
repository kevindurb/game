import type { IDrawable } from './IDrawable.js';
import type { VideoBuffer } from './VideoBuffer.js';

export class Compositor {
  private layers: IDrawable[] = [];
  constructor(private videoBuffer: VideoBuffer) {}

  push(layer: IDrawable) {
    this.layers.push(layer);
  }

  draw() {
    this.videoBuffer.clear();
    for (const layer of this.layers) {
      this.videoBuffer.reset();
      layer.draw(this.videoBuffer);
    }
  }
}
