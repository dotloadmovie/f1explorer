const {Text, Integer, Float} = require('@keystonejs/fields');

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
    fields
}