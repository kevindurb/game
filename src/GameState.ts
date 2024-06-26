import { Vector2d } from './util/Vector2d.js';
import { Angle } from './util/Angle.js';

export class GameState {
  public ship = {
    location: new Vector2d(),
    acceleration: new Vector2d(),
    rotation: new Angle(),
    velocity: new Vector2d(),
    rotationDirection: 0,
  };

  public deltaTime = 0;
}
