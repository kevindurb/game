import { Compositor } from '../Compositor.js';
import type { GameState } from '../GameState.js';
import { KeyState, KeyboardInput, Keys } from '../KeyboardInput.js';
import type { VideoBuffer } from '../VideoBuffer.js';
import { MyShip } from '../entities/MyShip.js';

export class Game {
  private keyboardInput = new KeyboardInput();
  private myShip: MyShip;
  private compositor: Compositor;

  constructor(
    private gameState: GameState,
    private videoBuffer: VideoBuffer,
  ) {
    this.compositor = new Compositor(this.videoBuffer);
    this.myShip = new MyShip(this.gameState);
    this.compositor.push(this.myShip);

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

    this.keyboardInput.addMapping(Keys.D, (state) => {
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
    this.compositor.draw();
  }
}
