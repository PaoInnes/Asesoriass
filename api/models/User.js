/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    id: {
      type: "string",
      required: true,
      regex: /^(31)[0-9]{7}/,
    },
    name: {
      type: "string",
      required: true,
      maxLength: 30,
    },
    password:{
      type: "string",
      required: true,
    },
    description:{
       type: "string",
       maxLength: 200,
    },
    signedUp: {
      collection: 'Advisory',
      via: 'advice',
    },
  },
  beforeCreate : function(data, proceed){
    bcrypt.hash(data.password, 3, (err, hash)=>{
      data.password = hash;
      return proceed();
    });
  },

};
