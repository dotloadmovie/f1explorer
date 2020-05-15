const { Text, Integer } = require('@keystonejs/fields');

const fields = {
    constructorId: {
        type: Integer,
        isRequired: true
    },
    constructorResultsId: {
        type: Integer
    },
    points: {
        type: Integer
    },
    status: {
        type: Text
    }    
};

module.exports = {
    fields
}