const {Text, Integer, Float} = require('@keystonejs/fields');

const fields = {
    year: {
        type: Integer
    },
    url: {
        type: Text
    }
}

module.exports = {
    fields
}