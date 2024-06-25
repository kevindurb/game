export class Timer {
  private lastTickTime = 0;
  private timeSinceLastUpdate = 0;

  constructor(
    private updateTime: number,
    private callback: (deltaTime: number) => void,
  ) {}

  start() {
    this.enqueue();
  }

  enqueue() {
    window.requestAnimationFrame((now) => this.tick(now));
  }

  tick(now: number) {
    this.timeSinceLastUpdate += (now - this.lastTickTime) / 1000;
    this.lastTickTime = now;

    if (this.timeSinceLastUpdate > this.updateTime) {
      this.callback(this.updateTime);
      this.timeSinceLastUpdate -= this.updateTime;
    }

    this.enqueue();
  }
}
