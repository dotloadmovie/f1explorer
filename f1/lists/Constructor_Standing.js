const {Integer} = require('@keystonejs/fields');
const {lockedAuth} = require('../auth/locked');
const {unlockedAuth} = require('../auth/unlocked');

const fields = {
    constructorStandingsId: {
        type: Integer
    },
    raceId: {
        type: Integer
    },
    pointers: {
        type: Integer
    },
    position: {
        type: Integer
    },
    wins: {
        type: Integer
    }
}

module.exports = {
    access: (process.env.NODE_ENV === 'development')? unlockedAuth : lockedAuth,
    fields
}

//"constructorStandingsId" : 1, "raceId" : 18, "constructorId" : 1, "points" : 14, "position" : 1, "positionText" : 1, "wins" : 1