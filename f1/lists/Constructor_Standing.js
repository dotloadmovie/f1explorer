const {Integer} = require('@keystonejs/fields');

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
    fields
}

//"constructorStandingsId" : 1, "raceId" : 18, "constructorId" : 1, "points" : 14, "position" : 1, "positionText" : 1, "wins" : 1