const { Text, Float, Integer } = require('@keystonejs/fields');

const fields = {
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
};

module.exports = {
  fields
}