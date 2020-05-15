const {Text, Integer, Float} = require('@keystonejs/fields');

const fields = {
    qualifyId: {
        type: Integer
    },
    raceId: {
        type: Integer
    },
    driverId: {
        type: Integer
    },
    constructorId: {
        type: Integer
    },
    number: {
        type: Integer
    },
    position: {
        type: Integer
    },
    q1: {
        type: Text
    },
    q2: {
        type: Text
    },
    q3: {
        type: Text
    }
}

module.exports = {
    fields
}

// "qualifyId" : 2, "raceId" : 18, "driverId" : 9, "constructorId" : 2, "number" : 4, "position" : 2, "q1" : "1:26.103", "q2" : "1:25.315", "q3" : "1:26.869" }
