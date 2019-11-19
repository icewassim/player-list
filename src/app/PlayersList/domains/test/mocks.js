export const mockAPIData = [
    {
        firstname: 'Yoda',
        lastname: 'Yoda umm, no last name has',
        shortname: 'Weed Man @ the Force',
        sex: 'G',
        country: {
            picture: 'planet X',
            code: 'PLX'
        },
        someRandomAttrThatShouldNotBeMapped: 'dsqdsqds',
        picture: 'Yoda umm handsom is',
        data: {
            'rank': 21,
            'points': 1784,
            'weight': 81000,
            'height': 183,
            'age': 33,
            'last': [
                1,
                1,
                1,
                0,
                1
            ]
        }
    },
    {
        firstname: 'John',
        lastname: 'Snow',
        shortname: 'Lord Commander',
        sex: 'M',
        country: {
            picture: 'there is snow everywhere',
            code: 'Winterfell'
        },
        picture: 'You know nothing John Snow',
        data: {
            'rank': 21,
            'points': 1784,
            'weight': 81000,
            'height': 183,
            'age': 33,
            'last': [
                1,
                1,
                1,
                0,
                1
            ]
        }
    }
];

export const expectedResult = [
    {
        age: 33,
        country: {
            code: 'PLX',
            picture: 'planet X'
        },
        firstname: 'Yoda',
        height: 1.83,
        lastname: 'Yoda umm, no last name has',
        matchesInfo: {
            losses: 1,
            points: 1784,
            wins: 4
        },
        picture: 'Yoda umm handsom is',
        rank: 21,
        sex: 'G',
        shortname: 'Weed Man @ the Force',
        weight: 81
    },
    {
        age: 33,
        country: {
            code: 'Winterfell',
            picture: 'there is snow everywhere',
        },
        firstname: 'John',
        height: 1.83,
        lastname: 'Snow',
        matchesInfo: {
            losses: 1,
            points: 1784,
            wins: 4
        },
        picture: 'You know nothing John Snow',
        rank: 21,
        sex: 'M',
        shortname: 'Lord Commander',
        'weight': 81
    }
];

export const mockAPIDataMissingAttributes = [{
    firstname: 'Yoda',
    lastname: 'Yoda umm, no last name has',
    shortname: 'Weed Man @ the Force',
    sex: 'G',
    country: {
        picture: 'planet X',
        code: 'PLX'
    },
    someRandomAttrThatShouldNotBeMapped: 'dsqdsqds',
    picture: 'Yoda umm handsom is',
    data: {
        'rank': 21,
        'weight': 81000,
        'height': 183,
        'last': [
            1,
            1,
            1,
            0,
            1
        ]
    }
}];

export const expectedResultMissingSomeAttributes = [{
    age: undefined,
    country: {
        code: 'PLX',
        picture: 'planet X'
    },
    firstname: 'Yoda',
    height: 1.83,
    lastname: 'Yoda umm, no last name has',
    matchesInfo: {
        losses: 1,
        points: undefined,
        wins: 4
    },
    picture: 'Yoda umm handsom is',
    rank: 21,
    sex: 'G',
    shortname: 'Weed Man @ the Force',
    weight: 81
},];
