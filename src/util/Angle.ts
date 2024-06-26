export class Angle {
  public degrees = 0;

  public get radians() {
    return this.degrees * (Math.PI / 180);
  }

  public set radians(radians: number) {
    this.degrees = radians * (180 / Math.PI);
  }
}
