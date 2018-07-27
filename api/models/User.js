/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    accountNumber: {
      type: "string",
      required: true,
      maxLength: 9,
      // isNumber: true,
    },
    name: {
      type: "string",
      required: true,
      // isString: true,
      maxLength: 30,
    },
    email:{
      type: "string",
      isEmail: true,
    },
    password:{
      type: "string",
      required: true,
    },
    description:{
       type: "string", //Aquí quieroo algo más grande, pero no sé qué usar
       maxLength: 200,
    },
  },

};
