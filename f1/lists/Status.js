const {Text, Integer, Float} = require('@keystonejs/fields');

const fields = {
    statusId: {
        type: Integer
    },
    status: {
        type: Text
    }
}

module.exports = {
    fields
}

// "statusId" : 1, "status" : "Finished" 