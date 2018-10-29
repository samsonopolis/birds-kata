// https://refactoring.guru/replace-conditional-with-polymorphism

export class BirdFactory {
    static build(_type, _numberOfCoconuts?, _isNailed?, _voltage?) {
        switch (_type) {
            case "EUROPEAN":
                return new European(_numberOfCoconuts, _isNailed, _voltage);
            case "AFRICAN":
                return new African(_numberOfCoconuts, _isNailed, _voltage);
            case "NORWEGIAN_BLUE":
                return new NorwegianBlue(_numberOfCoconuts, _isNailed);
            default:
                throw new Error('KAKAWWWW');
        }
    }
}

export class Bird {
    constructor(
        private _numberOfCoconuts: number = 3,
        private _isNailed: boolean = false,
        private _voltage: number = 2
    ) { }

    get numberOfCoconuts() {
        return this._numberOfCoconuts;
    }

    get isNailed() {
        return this._isNailed;
    }

    get voltage() {
        return this._voltage;
    }

    getBaseSpeed(voltage?: number): number {
        return voltage ? voltage * 2 : 21;
    }

    getLoadFactor() {
        return 2;
    }

    // getType() {
    //     return this.type;
    // }

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

class European extends Bird {

}

class African extends Bird {
    getSpeed(): number {
        return this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts;
    }
    getHeight(): number {
        return 5;
    }
}

class NorwegianBlue extends Bird {
    getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeed(this.voltage);
    }
    getWeight(): number {
        return 10;
    }
}