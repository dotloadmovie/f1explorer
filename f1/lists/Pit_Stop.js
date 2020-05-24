const {Text, Integer, Float} = require('@keystonejs/fields');
const {lockedAuth} = require('../auth/locked');
const {unlockedAuth} = require('../auth/unlocked');

const fields = {
    raceId: {
        type: Integer
    },
    driverId: {
        type: Integer
    },
    stop: {
        type: Integer
    },
    lap: {
        type: Integer
    },
    time: {
        type: Text
    },
    milliseconds: {
        type: Integer
    }
}

module.exports = {
    access: (process.env.NODE_ENV === 'development')? unlockedAuth : lockedAuth,
    fields
}