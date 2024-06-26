import type { GameState } from '../GameState.js';
import type { VideoBuffer } from '../VideoBuffer.js';
import { Vector2d } from '../util/Vector2d.js';

const ROTATION_VELOCITY = 100;
const MAX_THRUST = 10;

export class MyShip {
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

  draw(videoBuffer: VideoBuffer) {}

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
    this.state.ship.rotationDirection = 1;
  }

  setTurnCounterClockwise() {
    this.state.ship.rotationDirection = -1;
  }

  setTurnStop() {
    this.state.ship.rotationDirection = 0;
  }
}
