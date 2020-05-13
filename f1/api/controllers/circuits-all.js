module.exports = {
  friendlyName: "All Circuits",
  description: "All circuits view",

  inputs: {
    offset: {
      type: "number",
    },
    size: {
      type: "number",
    },
  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "pages/circuits-all",
    },
  },

  fn: async function ({ offset, size }) {
    // Look up the user whose ID was specified in the request.
    // Note that we don't have to validate that `userId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.
    var c = await circuits.find({
      skip: offset,
      limit: size,
    });

    // Display a personalized welcome view.
    return {
      message: "hello, world",
      circuits: c,
    };
  },
};
