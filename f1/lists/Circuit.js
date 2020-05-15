const { Text } = require('@keystonejs/fields');

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
  },
};
