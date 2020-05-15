const {Text, Integer, Float} = require('@keystonejs/fields');

const fields = {
    raceId: {
        type: Integer
    },
    driverId: {
        type: Integer
    },
    lap: {
        type: Integer
    },
    position: {
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

// "raceId" : 841, "driverId" : 20, "lap" : 3, "position" : 1, "time" : "1:32.713", "milliseconds" : 92713 }
