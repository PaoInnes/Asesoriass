/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    id: { // Número de cuenta
      type: "string",
      required: true,
      regex: /^(31)[0-9]{7}/,
    },
    name: { // NOmbre del usuario
      type: "string",
      required: true,
      maxLength: 30,
    },
    password:{ // Contraseña
      type: "string",
      required: true,
    },
    description:{ //Descripción
       type: "string",
       maxLength: 200,
    },
  },
  beforeCreate : function(data, proceed){
    bcrypt.hash(data.password, 3, (err, hash)=>{
      data.password = hash;
      return proceed();
    });
  },

};
