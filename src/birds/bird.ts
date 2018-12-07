// https://refactoring.guru/replace-conditional-with-polymorphism

type BIRD_TYPE = 'EUROPEAN' | 'AFRICAN' | 'NORWEGIAN_BLUE';

export class Bird {
  constructor(
    private _type: BIRD_TYPE,
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

  get isNailed() {
    return this._isNailed
  }

  get numberOfCoconuts() {
    return this._numberOfCoconuts;
  }

  get voltage() {
    return this._voltage;
  }
}

export class BirdFactory {
  static build(_type, _numberOfCoconuts?, _isNailed?, _voltage?) {
    switch (_type) {
      case 'EUROPEAN':
        return new EuroBird(_type, _numberOfCoconuts, _isNailed, _voltage);
      case 'AFRICAN':
        return new AfricanBird(_type, _numberOfCoconuts, _isNailed, _voltage);
      case 'NORWEGIAN_BLUE':
        return new NorwegianBird(_type, _numberOfCoconuts, _isNailed, _voltage);
    }

    throw new Error("Invalid Bird Type");
  }

}

class EuroBird extends Bird {
  getSpeed(): number {
    return this.getBaseSpeed();
  }

  getWeight(): number {
    return 3;
  }

  getHeight(): number {
    return 10;
  }
}

class AfricanBird extends Bird {
  getSpeed(): number {
    return this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts;
  }

  getWeight(): number {
    return 3;
  }

  getHeight(): number {
    return 5;
  }
}

class NorwegianBird extends Bird {
  getSpeed(): number {
    return (this.isNailed) ? 0 : this.getBaseSpeed(this.voltage);
  }

  getWeight(): number {
    return 10;
  }

  getHeight(): number {
    return 10;
  }
}