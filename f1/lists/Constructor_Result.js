const { Text, Integer } = require('@keystonejs/fields');
const {lockedAuth} = require('../auth/locked');
const {unlockedAuth} = require('../auth/unlocked');

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
    access: (process.env.NODE_ENV === 'development')? unlockedAuth : lockedAuth,
    fields
}