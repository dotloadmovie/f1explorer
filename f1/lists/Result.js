const {Text, Integer, Float} = require('@keystonejs/fields');
const {lockedAuth} = require('../auth/locked');
const {unlockedAuth} = require('../auth/unlocked');

const fields = {
    resultId: {
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
    grid: {
        type: Integer
    },
    position: {
        type: Integer
    },
    positionOrder: {
        type: Integer
    },
    points: {
        type: Integer
    },
    laps: {
        type: Integer
    },
    time: {
        type: Text
    },
    milliseconds: {
        type: Number
    },
    fastestLap: {
        type: Integer
    },
    rank: {
        type: Number
    },
    fastestLapTime: {
        type: Text
    },
    fastestLapSpeed: {
        type: Integer
    },
    statusId: {
        type: Integer
    }
}

module.exports = {
    access: (process.env.NODE_ENV === 'development')? unlockedAuth : lockedAuth,
    fields
}

//"resultId" : 1, "raceId" : 18, "driverId" : 1, "constructorId" : 1, "number" : 22, "grid" : 1, "position" : 1, 
//"positionText" : 1, "positionOrder" : 1, "points" : 10, "laps" : 58, "time" : "1:34:50.616", "milliseconds" : 5690616, 
//"fastestLap" : 39, "rank" : 2, "fastestLapTime" : "1:27.452", "fastestLapSpeed" : 218.3, "statusId" : 1 }