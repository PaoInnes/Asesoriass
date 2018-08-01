/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const bcrypt = require('bcrypt');

module.exports = {
  auth: function(req, res) {
    if(req.session.userId)
      return res.send(req.session.userId);
    else
      return res.send("nope");
  },
  logup: async function(req, res) {
      try {
        let user = await User.create({
          id : req.body.accountNumber,
          name : req.body.userName,
          password : req.body.pass,
          description : req.body.description
        }).fetch();
        req.session.user = user.id;
        return res.ok();
      } catch (error){
        return res.send("error");
      }
  },
  login: async function (req, res) {
    if (req.body.accountNumberIn) {
      let user = await User.findOne({id: req.body.accountNumberIn});
      if(!user)//si no encuentra el usuario avisar que no está registrado
      return res.view("pages/login", {error: "No se encontró el usuario"});

      else{
        bcrypt.compare(req.body.password,user.password,(err, resp)=>{
          if (err) //si hay un error
          return res.view("pages/login", {error: "Algo anda mal y no hemos podido inciar tu sesión"});

          else if (resp){ //si todo está chido
            req.session.userId = user.id;
            return res.redirect("/");
          }
          //Si está mal la contraseña
          else
            return res.view("pages/login", {error: "Verfifica tus datos"}); //Dijo Carlos que por seguridad no hayq ue mandar que está mal la contraseña

        })
      }
    }
    else
      return res.view("pages/login", {error: "Ingresa un usuario"});
  },
  logout: function(req, res) {
    delete req.session.userId;
    return res.redirect("/");
  },

};
