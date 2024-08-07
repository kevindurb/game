import { Vector2d } from './util/Vector2d.js';

export class VideoBuffer {
  public canvas = document.createElement('canvas');

  constructor(size: Vector2d) {
    this.canvas.width = size.x;
    this.canvas.height = size.y;
  }

  public get size() {
    return new Vector2d(this.canvas.width, this.canvas.height);
  }

  public set size(size: Vector2d) {
    this.canvas.width = size.x;
    this.canvas.height = size.y;
  }

  public get context() {
    const context = this.canvas.getContext('2d');
    if (!context) throw new Error('Error getting canvas context');
    return context;
  }

  public clear() {
    this.context.clearRect(0, 0, this.size.x, this.size.y);
  }

  public reset() {
    this.context.reset();
  }
}
