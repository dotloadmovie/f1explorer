const { Text, Float, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    country: {
      type: Text,
      defaultValue: false,
    },
    url: {
      type: Text,
      defaultValue: false
    },
    lat: {
      type: Float,
      defaultValue: 0
    },
    lng: {
      type: Float,
      defaultValue: 0
    },
    location: {
      type: Text
    },
    circuitId: {
      type: Integer
    }
  },
};


//{ "_id" : ObjectId("5ebac92662bfafc8eca03da4"), "circuitId" : 25, "circuitRef" : "galvez", "name" : "Autódromo Juan y Oscar Gálvez", "location" : "Buenos Aires", "country" : "Argentina", "lat" : -34.6943, "lng" : -58.4593, "alt" : "\\N", "url" : "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Oscar_Alfredo_G%C3%A1lvez" }
