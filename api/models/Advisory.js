/**
 * Advisory.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: "number",
      autoIncrement: true,
    },
    accountNumber: {
      model: "User",
    },
    quota: {
      type: "number",
      min: 1, //Aquí podría ocasionar un error en el futuro
      max: 20,
      required: true,
    },
    days:{
      type: "string",
      required: true,
    },
    hour: {
      type: "string",
      maxLength: 5,
    },
    classroom: {
      type: "string",
      maxLength: 3,
    },
    subject: {
      type: "string",
      maxLength: 20,
    },
    advice: {
      collection: 'User',
      via: 'signedUp'
    }
  },

};
