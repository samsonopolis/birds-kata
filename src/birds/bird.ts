// https://refactoring.guru/replace-conditional-with-polymorphism

export class Bird {
  constructor(
    private _type: string,
    private _numberOfCoconuts: number = 3,
    private _isNailed: boolean = false,
    private _voltage: number = 2
  ) { }

  getBaseSpeed(voltage?: number): number {
    return voltage ? voltage * 2 : 21;
  }

  getLoadFactor() {
    return 2;
  }

  getType() {
    return this._type;
  }

  getSpeed(): number {
    switch (this._type) {
      case 'EUROPEAN':
        return this.getBaseSpeed();
      case 'AFRICAN':
        return this.getBaseSpeed() - this.getLoadFactor() * this._numberOfCoconuts;
      case 'NORWEGIAN_BLUE':
        return (this._isNailed) ? 0 : this.getBaseSpeed(this._voltage);
    }

    throw new Error("Invalid Bird Type");
  }

  getWeight(): number {
    switch (this._type) {
      case 'EUROPEAN':
        return 3;
      case 'AFRICAN':
        return 3;
      case 'NORWEGIAN_BLUE':
        return 10;
    }

    throw new Error("Invalid Bird Type");
  }

  getHeight(): number {
    switch (this._type) {
      case 'EUROPEAN':
        return 10;
      case 'AFRICAN':
        return 5;
      case 'NORWEGIAN_BLUE':
        return 10;
    }

    throw new Error("Invalid Bird Type");
  }
}
