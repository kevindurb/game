import type { VideoBuffer } from './VideoBuffer.js';

interface Drawable {
  draw: (videoBuffer: VideoBuffer) => void;
}

export class Compositor {
  private layers: Drawable[] = [];
  constructor(private videoBuffer: VideoBuffer) {}

  push(layer: Drawable) {
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
