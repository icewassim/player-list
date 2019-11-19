import { getPlayers } from '../mappers';

import {
    mockAPIData,
    expectedResult,
    mockAPIDataMissingAttributes,
    expectedResultMissingSomeAttributes,
} from './mocks';

describe('Players mapper', () => {
    it('should map correctly the players value from the api', () => {
        const result = getPlayers(mockAPIData);
        expect(result).toStrictEqual(expectedResult);
    });

    it('should return an empty array if no data', () => {
        const result = getPlayers([]);
        expect(result).toStrictEqual([]);
    });

    it('should not return an exception of some attribute is missing in the api', () => {
        const result = getPlayers(mockAPIDataMissingAttributes);
        expect(result).toStrictEqual(expectedResultMissingSomeAttributes);
    });
})