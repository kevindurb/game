export class Range {
  constructor(
    private min: number,
    private max: number,
  ) {}

  *[Symbol.iterator]() {
    for (let value = this.min; value <= this.max; value++) {
      yield value;
    }
  }
}
