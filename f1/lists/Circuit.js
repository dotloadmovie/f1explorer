const { Text, Float, Integer } = require('@keystonejs/fields');
const {lockedAuth} = require('../auth/locked');
const {unlockedAuth} = require('../auth/unlocked');

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
  access: (process.env.NODE_ENV === 'development')? unlockedAuth : lockedAuth,
  fields
}