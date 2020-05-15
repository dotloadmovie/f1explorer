const {Text, Integer} = require('@keystonejs/fields');

const fields = {
    driverId: {
        type: Integer
    },
    driverRef: {
        type: Text
    },
    forename: {
        type: Text
    },
    surname: {
        type: Text
    },
    dob: {
        type: Text
    },
    nationality: {
        type: Text
    },
    url: {
        type: Text
    }
};

module.exports = {
    fields
}

//"driverId" : 3, "driverRef" : "rosberg", "number" : 6, "code" : "ROS", "forename" : "Nico", "surname" : "Rosberg", "dob" : "1985-06-27", "nationality" : "German", "url" : "http://en.wikipedia.org/wiki/Nico_Rosberg"