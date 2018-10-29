import { BirdFactory, Bird } from './bird';

describe('Bird', () => {
    let bird;
    let birdy;

    describe('bird is EUROPEAN', () => {
        beforeEach(() => {
            // birdy = new Bird('EUROPEAN');
            bird = BirdFactory.build('EUROPEAN');
        });

        describe('#getSpeed', () => {
            it('returns correct bird speed', () => {
                expect(bird.getSpeed()).toEqual(21);
            });
        });

        describe('#getWeight', () => {
            it('returns correct bird weight', () => {
                expect(bird.getWeight()).toEqual(3);
            });
        });

        describe('#getHeight', () => {
            it('returns correct bird height', () => {
                expect(bird.getHeight()).toEqual(10);
            });
        });
    });

    describe('bird is AFRICAN', () => {
        beforeEach(() => {
            // birdy = new Bird('AFRICAN');
            bird = BirdFactory.build('AFRICAN');
        });

        describe('#getSpeed', () => {
            it('returns correct bird speed', () => {
                expect(bird.getSpeed()).toEqual(15);
            });
        });

        describe('#getWeight', () => {
            it('returns correct bird weight', () => {
                expect(bird.getWeight()).toEqual(3);
            });
        });

        describe('#getHeight', () => {
            it('returns correct bird height', () => {
                expect(bird.getHeight()).toEqual(5);
            });
        });
    });

    describe('bird is NORWEGIAN BLUE', () => {
        describe('bird is nailed - not sure what this means', () => {
            beforeEach(() => {
                //birdy = new Bird('NORWEGIAN_BLUE', 3, true);
                bird = BirdFactory.build('NORWEGIAN_BLUE', 3, true);
            });

            describe('#getSpeed', () => {
                it('returns correct bird speed', () => {
                    expect(bird.getSpeed()).toEqual(0);
                });
            });

            describe('#getWeight', () => {
                it('returns correct bird weight', () => {
                    expect(bird.getWeight()).toEqual(10);
                });
            });

            describe('#getHeight', () => {
                it('returns correct bird height', () => {
                    expect(bird.getHeight()).toEqual(10);
                });
            });
        });

        describe('bird is not nailed - not sure what this means', () => {
            beforeEach(() => {
                //birdy = new Bird('NORWEGIAN_BLUE', 3, false);
                bird = BirdFactory.build('NORWEGIAN_BLUE', 3, false);
            });

            describe('#getSpeed', () => {
                it('returns correct bird speed', () => {
                    expect(bird.getSpeed()).toEqual(4);
                });
            });

            describe('#getWeight', () => {
                it('returns correct bird weight', () => {
                    expect(bird.getWeight()).toEqual(10);
                });
            });

            describe('#getHeight', () => {
                it('returns correct bird height', () => {
                    expect(bird.getHeight()).toEqual(10);
                });
            });
        });
    });
});
