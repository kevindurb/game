export class Vector2d {
  constructor(
    public x = 0,
    public y = 0,
  ) {}

  add(val: number | Vector2d) {
    if (val instanceof Vector2d) {
      this.x += val.x;
      this.y += val.y;
      return this;
    }
    this.x += val;
    this.y += val;
    return this;
  }

  subtract(val: number | Vector2d) {
    if (val instanceof Vector2d) {
      this.x -= val.x;
      this.y -= val.y;
      return this;
    }
    this.x -= val;
    this.y -= val;
    return this;
  }

  multiply(val: number | Vector2d) {
    if (val instanceof Vector2d) {
      this.x *= val.x;
      this.y *= val.y;
      return this;
    }
    this.x *= val;
    this.y *= val;
    return this;
  }

  divide(val: number | Vector2d) {
    if (val instanceof Vector2d) {
      this.x /= val.x;
      this.y /= val.y;
      return this;
    }
    this.x /= val;
    this.y /= val;
    return this;
  }

  copy() {
    return new Vector2d(this.x, this.y);
  }

  get amplitude() {
    if (!this.x && !this.y) return 0;
    return Math.sqrt((Math.abs(this.x) ^ 2) + (Math.abs(this.y) ^ 2));
  }
}
