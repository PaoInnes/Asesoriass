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
    asesor: {
      model: "User",
    },
    quota: {
      type: "number",
      min: 1,
      max: 20,
      required: true,
    },
    days:{
      type: "json",
      required: true,
    },
    starts: {
      type: "string",
      maxLength: 5,
    },
    ends: {
      type: "string",
      maxLength: 5,
    },
    classroom: {
      type: "string",
    },
    description: {
      type: "string",
      maxLength: 100,
    },
    subject: {
      type: "string",
      maxLength: 20,
    },
    inscritos: {
      type: "number",
      defaultsTo: 0,
    },
  },

};
