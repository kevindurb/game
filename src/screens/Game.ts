import { Compositor } from '../Compositor.js';
import type { GameState } from '../GameState.js';
import { KeyState, KeyboardInput, Keys } from '../KeyboardInput.js';
import { PointerEventType, PointerInput } from '../PointerInput.js';
import type { VideoBuffer } from '../VideoBuffer.js';
import { HUD } from '../entities/HUD.js';
import { MyShip } from '../entities/MyShip.js';
import { SpaceBackground } from '../entities/SpaceBackground.js';
import { Vector2d } from '../util/Vector2d.js';

export class Game {
  private keyboardInput = new KeyboardInput();
  private pointerInput = new PointerInput();
  private myShip: MyShip;
  private compositor: Compositor;

  constructor(
    private gameState: GameState,
    private videoBuffer: VideoBuffer,
  ) {
    this.compositor = new Compositor(this.videoBuffer);
    this.myShip = new MyShip(this.gameState);

    this.compositor.push(new SpaceBackground(this.gameState));
    this.compositor.push(new HUD(this.gameState));
    this.compositor.push(this.myShip);

    this.setupInputMappings();
    this.keyboardInput.listenTo(window);
    this.pointerInput.listenTo(window);
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

    this.pointerInput.addMapping(
      PointerEventType.PointerMove,
      (location, isPressed) => {
        if (!isPressed) return;
        const center = this.videoBuffer.size.copy().divide(2);
        this.myShip.setAccelVector(
          location.copy().subtract(center).multiply(new Vector2d(-1, 1)),
        );
      },
    );
  }

  update() {
    this.myShip.update();
  }

  draw() {
    this.compositor.draw();
  }
}
