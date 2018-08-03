/**
 * Ase-user.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
    },
    asesoria: {
      model: "Advisory",
    },
    asesorado: {
      model: "User",
    },
    estado: {
      type: "string",
      maxLength: 10,
      defaultsTo: "Pendiente",
    }
  },

};
