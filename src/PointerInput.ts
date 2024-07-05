import { Vector2d } from './util/Vector2d.js';

type Callback = (location: Vector2d, isPressed: boolean) => void;

export enum PointerEventType {
  PointerDown = 'pointerdown',
  PointerUp = 'pointerup',
  PointerMove = 'pointermove',
}

export class PointerInput {
  private eventMap = new Map<PointerEventType, Callback>();
  private isPressed = false;

  addMapping(type: PointerEventType, callback: Callback) {
    this.eventMap.set(type, callback);
  }

  private eventIsPointerEvent(type: string): type is PointerEventType {
    return this.getPointerEvents().includes(type as PointerEventType);
  }

  private getPointerEvents() {
    return Object.values(PointerEventType);
  }

  private handleEvent(event: PointerEvent) {
    const { type, x, y } = event;

    if (!this.eventIsPointerEvent(type)) return;

    if (type === PointerEventType.PointerDown) {
      this.isPressed = true;
    }
    if (type === PointerEventType.PointerUp) {
      this.isPressed = false;
    }

    if (this.eventMap.has(type)) {
      event.preventDefault();
      this.eventMap.get(type)?.(new Vector2d(x, y), this.isPressed);
    }
  }

  listenTo(eventTarget: EventTarget) {
    for (const eventType of this.getPointerEvents()) {
      eventTarget.addEventListener(eventType, (event) =>
        this.handleEvent(event as PointerEvent),
      );
    }
  }
}
