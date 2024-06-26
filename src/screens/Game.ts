import { MyShip } from '../entities/MyShip.js';
import type { GameState } from '../GameState.js';
import { KeyboardInput, Keys, KeyState } from '../KeyboardInput.js';

export class Game {
  private keyboardInput = new KeyboardInput();
  private myShip: MyShip;

  constructor(private gameState: GameState) {
    this.myShip = new MyShip();

    this.keyboardInput.addMapping(Keys.W, (state) => {
      this.gameState.shipAcceleration.y = state === KeyState.Pressed ? 10 : 0;
    });

    this.keyboardInput.addMapping(Keys.S, (state) => {
      this.gameState.shipAcceleration.y = state === KeyState.Pressed ? -10 : 0;
    });
    //
    // this.keyboardInput.addMapping(Keys.A, (state) => {
    //   this.myShip.rotationDirection = state === 'Pressed' ? 1 : 0;
    // });
    //
    // this.keyboardInput.addMapping(Keys.D, (state) => {
    //   this.myShip.rotationDirection = state === 'Pressed' ? -1 : 0;
    // });

    this.keyboardInput.listenTo(window);
  }

  update() {
    this.myShip.update();
  }

  draw() {
    this.myShip.draw();
  }
}
