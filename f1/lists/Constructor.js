const {Text, Integer, Float} = require('@keystonejs/fields');

const fields = {
    constructorId: {
        type: Integer
    },
    constructorRef: {
        type: Text
    },
    name: {
        type: Text
    },
    nationality: {
        type: Text
    },
    url: {
        type: String
    }
}

module.exports = {
    fields
}

//"constructorId" : 2, "constructorRef" : "bmw_sauber", "name" : "BMW Sauber", "nationality" : "German", "url" : "http://en.wikipedia.org/wiki/BMW_Sauber"