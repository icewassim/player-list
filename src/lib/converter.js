const KILOS_UNIT = 1000;
const METERS_UNIT = 100;

export const getWeightInKilos = (weight) => {
    if (!weight || typeof weight !== 'number') {
        return 0
    }

    return weight/KILOS_UNIT;
}

export const getHeightInMeters = (height) => {
    if (!height || typeof height !== 'number') {
        return 0
    }

    return height/METERS_UNIT;
}

export const getLossesAndWins = (last) => {
    if (!last || !Array.isArray(last)) {
        return {};
    }

    const total = last.length;
    const wins = last.filter(match => match === 1).length;

    return {
        wins,
        losses: total - wins,
    }
}