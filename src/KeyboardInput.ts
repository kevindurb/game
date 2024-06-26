type KeyCallback = (keyState: KeyState) => void;

export enum Keys {
  W = 'KeyW',
  A = 'KeyA',
  S = 'KeyS',
  D = 'KeyD',
}

export enum KeyState {
  Pressed = 'Pressed',
  Released = 'Released',
}

enum KeyEventType {
  KeyDown = 'keydown',
  KeyUp = 'keyup',
}

export class KeyboardInput {
  private keyStates = new Map<string, KeyState>();
  private keyMap = new Map<string, KeyCallback>();

  addMapping(code: Keys, callback: KeyCallback) {
    this.keyMap.set(code, callback);
  }

  handleEvent(event: KeyboardEvent) {
    const { code } = event;

    if (!this.keyMap.has(code)) return;

    event.preventDefault();

    const keyState =
      event.type === KeyEventType.KeyDown
        ? KeyState.Pressed
        : KeyState.Released;

    if (this.keyStates.get(code) === keyState) return;

    this.keyStates.set(code, keyState);
    this.keyMap.get(code)?.(keyState);
  }

  listenTo(eventTarget: EventTarget) {
    eventTarget.addEventListener(KeyEventType.KeyUp, (event) =>
      this.handleEvent(event as KeyboardEvent),
    );
    eventTarget.addEventListener(KeyEventType.KeyDown, (event) =>
      this.handleEvent(event as KeyboardEvent),
    );
  }
}
