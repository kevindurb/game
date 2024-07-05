import type { IDrawable } from './IDrawable.js';
import type { VideoBuffer } from './VideoBuffer.js';

export class Compositor {
  private layers: IDrawable[] = [];
  constructor(private videoBuffer: VideoBuffer) {}

  push(layer: IDrawable) {
    this.layers.push(layer);
  }

  draw() {
    this.videoBuffer.reset();
    this.videoBuffer.context.save();
    for (const layer of this.layers) {
      this.videoBuffer.context.restore();
      layer.draw(this.videoBuffer);
    }
  }
}
