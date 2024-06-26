import { MyShip } from '../entities/MyShip.js';
import type { GameState } from '../GameState.js';
import { KeyboardInput, Keys, KeyState } from '../KeyboardInput.js';

export class Game {
  private keyboardInput = new KeyboardInput();
  private myShip: MyShip;

  constructor(private gameState: GameState) {
    this.myShip = new MyShip(this.gameState);
    this.setupInputMappings();
    this.keyboardInput.listenTo(window);
  }

  setupInputMappings() {
    this.keyboardInput.addMapping(Keys.W, (state) => {
      if (state === KeyState.Pressed) {
        this.myShip.setAccelForward();
      } else {
        this.myShip.setAccelZero();
      }
    });

    this.keyboardInput.addMapping(Keys.S, (state) => {
      if (state === KeyState.Pressed) {
        this.myShip.setAccelBackward();
      } else {
        this.myShip.setAccelZero();
      }
    });

    this.keyboardInput.addMapping(Keys.A, (state) => {
      if (state === KeyState.Pressed) {
        this.myShip.setTurnCounterClockwise();
      } else {
        this.myShip.setTurnStop();
      }
    });

    this.keyboardInput.addMapping(Keys.A, (state) => {
      if (state === KeyState.Pressed) {
        this.myShip.setTurnClockwise();
      } else {
        this.myShip.setTurnStop();
      }
    });
  }

  update() {
    this.myShip.update();
  }

  draw() {
    this.myShip.draw();
  }
}
