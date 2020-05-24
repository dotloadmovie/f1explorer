const {Text, Integer, Float} = require('@keystonejs/fields');
const {lockedAuth} = require('../auth/locked');
const {unlockedAuth} = require('../auth/unlocked');

const fields = {
    raceId: {
        type: Integer
    },
    year: {
        type: Integer
    },
    circuitId: {
        type: Integer
    },
    name: {
        type: Text
    },
    date: {
        type: Text
    },
    url: {
        type: Text
    }
}

module.exports = {
    access: (process.env.NODE_ENV === 'development')? unlockedAuth : lockedAuth,
    fields
}

//"raceId" : 7, "year" : 2009, "round" : 7, "circuitId" : 5, "name" : "Turkish Grand Prix", "date" : "2009-06-07", "time" : "12:00:00", "url" : "http://en.wikipedia.org/wiki/2009_Turkish_Grand_Prix" }
