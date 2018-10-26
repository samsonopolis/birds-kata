// https://refactoring.guru/replace-conditional-with-polymorphism

export class BirdFactory {
  static build(_type, _numberOfCoconuts?, _isNailed?, _voltage?) {
    switch(_type) {
      case 'EUROPEAN': 
        return new European(_type);
      case 'AFRICAN':
        return new African(_type);
      default:
        return new Bird(_type, _numberOfCoconuts, _isNailed, _voltage);
    }

  }
}

type BIRD_TYPE = 'EUROPEAN' | 'AFRICAN' | 'NORWEGIAN_BLUE';

export class Bird {
  constructor(
    private _type: BIRD_TYPE,
    private _numberOfCoconuts: number = 3,
    private _isNailed: boolean = false,
    private _voltage: number = 2
  ) {}

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
      case 'AFRICAN':
        return this.getBaseSpeed() - this.getLoadFactor() * this._numberOfCoconuts;
      case 'NORWEGIAN_BLUE':
        return (this._isNailed) ? 0 : this.getBaseSpeed(this._voltage);
    }

    throw new Error("Invalid Bird Type");
  }

  getWeight(): number {
    switch (this._type) {
      case 'NORWEGIAN_BLUE':
        return 10;
    }

    throw new Error("Invalid Bird Type");
  }

  getHeight(): number {
    switch (this._type) {
      case 'NORWEGIAN_BLUE':
        return 10;
    }

    throw new Error("Invalid Bird Type");
  }
}

class European extends Bird {
  getHeight(): number {
    return 10;
  }

  getWeight(): number {
    return 3;
  }
  getSpeed() {
    return this.getBaseSpeed();
  }
}

class African extends Bird {
  getHeight(): number {
    return 5;
  }

  getWeight(): number {
    return 3;
  }
  getSpeed() {
    return this.getBaseSpeed() - this.getLoadFactor() * 3;
  }
}
