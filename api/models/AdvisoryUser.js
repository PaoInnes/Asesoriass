/**
 * AdvisoryUser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idAdvisory: {
      type: "number",
      autoIncrement: true,
    },
    accountNumber: {
      type: "string",
      required: true,
      maxLength: 9,
      // isNumber: true,
    },
  },

};
