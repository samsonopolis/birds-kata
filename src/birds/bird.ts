// https://refactoring.guru/replace-conditional-with-polymorphism

export class BirdFactory {
  static build(_type, _numberOfCoconuts?, _isNailed?, _voltage?) {
    switch(_type) {
      case 'EUROPEAN': 
        return new European(_type);
      case 'AFRICAN':
        return new African(_type);
      case 'NORWEGIAN_BLUE':
        return new NorwegianBlue(_type, _numberOfCoconuts, _isNailed);
    }
    
    throw new Error("Invalid Bird Type");
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

  get coconuts() {
    return this._numberOfCoconuts;
  }

  get isNailed() {
    return this._isNailed;
  }

  get voltage() {
    return this._voltage
  }

  getBaseSpeed(voltage?: number): number {
    return voltage ? voltage * 2 : 21;
  }

  getLoadFactor() {
    return 2;
  }

  getType() {
    return this._type;
  }

  getSpeed() {}

  getWeight() {}

  getHeight() {}
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
    return this.getBaseSpeed() - this.getLoadFactor() * this.coconuts;
  }
}

class NorwegianBlue extends Bird {
  getHeight() {
    return 10;
  }

  getWeight() {
    return 10;
  }

  getSpeed() {
    return (this.isNailed) ? 0 : this.getBaseSpeed(this.voltage);
  }
}
