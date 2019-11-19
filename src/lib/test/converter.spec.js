import {
    getWeightInKilos,
    getHeightInMeters,
    getLossesAndWins,
} from '../converter';

describe('Converter utils', () => {
    it('should convert the weight correctly', () => {
        expect(getHeightInMeters(231322)).toEqual(2313.22);
        expect(getHeightInMeters('"é"("')).toEqual(0);
        expect(getHeightInMeters()).toEqual(0);
    });

    it('should convert the weight correctly', () => {
        expect(getWeightInKilos(251322)).toEqual(251.322);
        expect(getWeightInKilos('"dsqds"("')).toEqual(0);
        expect(getWeightInKilos()).toEqual(0);
    });

    it('should get the correct count of wins and losses', () => {
        expect(getLossesAndWins([1, 0, 1, 1])).toStrictEqual({
            losses: 1,
            wins: 3,
        });
        expect(getLossesAndWins('dsqdsq')).toStrictEqual({});
        expect(getLossesAndWins(null)).toStrictEqual({});
        expect(getLossesAndWins([])).toStrictEqual({
            losses: 0,
            wins: 0,
        });
    });
})