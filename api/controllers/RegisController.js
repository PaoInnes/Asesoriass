/**
 * RegisController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  validar: function(req, res) {
    console.log("Alguien quere Registrarse",req);
    return view("/views/pages/main");
  },
};
