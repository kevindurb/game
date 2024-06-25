type KeyState = 'Pressed' | 'Released';
type KeyCallback = (keyState: KeyState) => void;

export enum Keys {
  W = 'KeyW',
  A = 'KeyA',
  S = 'KeyS',
  D = 'KeyD',
}

export class KeyboardInput {
  private keyStates = new Map<string, KeyState>();
  private keyMap = new Map<string, KeyCallback>();

  addMapping(code: Keys, callback: KeyCallback) {
    this.keyMap.set(code, callback);
  }

  handleEvent(event: KeyboardEvent) {
    const { code } = event;

    if (!this.keyMap.has(code)) {
      return;
    }

    event.preventDefault();

    const keyState: KeyState =
      event.type === 'keydown' ? 'Pressed' : 'Released';

    if (this.keyStates.get(code) === keyState) {
      return;
    }

    this.keyStates.set(code, keyState);

    this.keyMap.get(code)!(keyState);
  }

  listenTo(window: Window) {
    ['keydown', 'keyup'].forEach((eventName) => {
      window.addEventListener(eventName, (event) => {
        this.handleEvent(event as KeyboardEvent);
      });
    });
  }
}
