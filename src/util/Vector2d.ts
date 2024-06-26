export class Vector2d {
	constructor(
		public x = 0,
		public y = 0,
	) {}

	add({ x, y }: Vector2d) {
		this.x += x;
		this.y += y;
		return this;
	}

	multiply(val: number) {
		this.x *= val;
		this.y *= val;
		return this;
	}

	copy() {
		return new Vector2d(this.x, this.y);
	}
}
