import {
    getHeightInMeters,
    getWeightInKilos,
    getLossesAndWins,
} from '../../../lib/converter';

export const getPlayers = (players) => players && players.map(({
    shortname,
    firstname,
    lastname,
    picture,
    country,
    data,
    sex,
}) => ({
    shortname,
    firstname,
    lastname,
    picture,
    country,
    sex,
    rank: data && data.rank,
    age: data && data.age,
    height: data && getHeightInMeters(data.height),
    weight: data && getWeightInKilos(data.weight), 
    matchesInfo: {
        points: data && data.points,
        ...getLossesAndWins(data && data.last),
    }
}));