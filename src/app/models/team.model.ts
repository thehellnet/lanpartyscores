export class Team {

  private _name: string;
  private _points: number;

  constructor(name: string, points: number) {
    this._name = name;
    this._points = points;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }
}
