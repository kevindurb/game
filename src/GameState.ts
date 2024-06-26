import { Angle } from './util/Angle.js';
import { Vector2d } from './util/Vector2d.js';

export class GameState {
  public shipLocation = new Vector2d();
  public shipAcceleration = new Vector2d();
  public shipRotation = new Angle();
}
