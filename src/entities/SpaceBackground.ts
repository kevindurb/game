import type { GameState } from '../GameState.js';
import type { IDrawable } from '../IDrawable.js';
import { Range } from '../util/Range.js';
import type { VideoBuffer } from '../VideoBuffer.js';

export class SpaceBackground implements IDrawable {
  constructor(private state: GameState) {}

  update() {}

  draw({ size: { x: width, y: height }, context }: VideoBuffer) {
    context.fillStyle = 'black';
    const xOffset = this.state.ship.location.x % 100;
    const yOffset = this.state.ship.location.y % 100;

    for (const value of new Range(0, width / 100)) {
      context.fillRect(value * 100 + xOffset, 0, 1, height);
    }

    for (const value of new Range(0, height / 100)) {
      context.fillRect(0, value * 100 + yOffset, width, 1);
    }
  }
}
