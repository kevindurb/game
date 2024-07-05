import type { GameState } from '../GameState.js';
import type { IDrawable } from '../IDrawable.js';
import type { VideoBuffer } from '../VideoBuffer.js';

export class HUD implements IDrawable {
  constructor(private state: GameState) {}

  update() {}

  draw({ size: { y: height }, context }: VideoBuffer) {
    const {
      velocity: { amplitude: velocity },
      acceleration: { amplitude: accel },
      location: { x, y },
    } = this.state.ship;

    context.font = '48px monospace';
    context.fillText(
      `V: ${velocity.toFixed(2)}, A: ${accel.toFixed(2)}, X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`,
      24,
      height - 24 - 48,
    );
  }
}
