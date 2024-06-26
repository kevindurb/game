import type { GameState } from '../GameState.js';
import { Vector2d } from '../util/Vector2d.js';

export class MyShip {
  constructor(private state: GameState) {}

  update() {
    const {
      ship: {
        acceleration: { y: accel },
        velocity,
        rotation,
      },
    } = this.state;
    const accelX = Math.sin(rotation.radians) * accel;
    const accelY = Math.cos(rotation.radians) * accel;
    const rotatedAccel = new Vector2d(accelX, accelY);

    velocity.add(rotatedAccel.multiply(this.state.deltaTime));
  }

  draw() {}

  setAccelForward() {
    this.state.ship.acceleration.y = 10;
  }

  setAccelBackward() {
    this.state.ship.acceleration.y = -10;
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
