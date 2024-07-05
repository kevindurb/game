import type { GameState } from '../GameState.js';
import type { IDrawable } from '../IDrawable.js';
import type { VideoBuffer } from '../VideoBuffer.js';
import { Vector2d } from '../util/Vector2d.js';

const ROTATION_VELOCITY = 200;
const MAX_THRUST = 100;

export class MyShip implements IDrawable {
  private size = new Vector2d(48, 64);

  constructor(private state: GameState) {}

  update() {
    const {
      ship: {
        acceleration: { y: accel },
        velocity,
        rotation,
        location,
        rotationDirection,
      },
      deltaTime,
    } = this.state;

    const accelX = Math.sin(rotation.radians) * accel;
    const accelY = Math.cos(rotation.radians) * accel;
    const rotatedAccel = new Vector2d(accelX, accelY);

    velocity.add(rotatedAccel.multiply(deltaTime));
    location.add(velocity.copy().multiply(deltaTime));

    const rotationDelta = rotationDirection * (ROTATION_VELOCITY * deltaTime);
    rotation.degrees += rotationDelta;
    if (rotation.degrees > 360) rotation.degrees -= 360;
    if (rotation.degrees < 0) rotation.degrees += 360;
  }

  setAccelForward() {
    this.state.ship.acceleration.y = MAX_THRUST;
  }

  setAccelBackward() {
    this.state.ship.acceleration.y = -MAX_THRUST;
  }

  setAccelZero() {
    this.state.ship.acceleration.y = 0;
  }

  setTurnClockwise() {
    this.state.ship.rotationDirection = -1;
  }

  setTurnCounterClockwise() {
    this.state.ship.rotationDirection = 1;
  }

  setTurnStop() {
    this.state.ship.rotationDirection = 0;
  }

  draw({ size, context }: VideoBuffer) {
    const {
      ship: { rotation },
    } = this.state;
    const { x: width, y: height } = this.size;
    const { x, y } = size.copy().divide(2);

    context.fillStyle = 'blue';

    context.translate(x, y);
    context.rotate(-rotation.radians);
    context.beginPath();
    context.moveTo(width / -2, height / 2);
    context.lineTo(width / 2, height / 2);
    context.lineTo(0, height / -2);
    context.lineTo(width / -2, height / 2);
    context.fill();
  }
}
