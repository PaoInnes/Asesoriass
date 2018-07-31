/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const bcrypt = require('bcrypt');

module.exports = {
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
    let user = await User.find({id: req.body.accountNumberIn});
    // console.log(res);
    if(!user){//si no encuentra el usuario avisar que no está registrado
      console.log(res);
      return res.view("pages/login", {error: "No se encontró el usuario"});
    }
    else{
      bcrypt.compare(req.body.password,user.password,(err, res)=>{
        if (err) //si nhay un error
          return res.view("pages/login", {error: "Algo anda mal y no hemos podido inciar tu sesión"});

        if (res){ //si todo está chido
          req.session.userId = user.id;
          return res.redirect("/");
        }
        //Si está mal la contraseña
        return res.view("pages/login", {error: "Verfifica tus datos"});

      })
    }
  }

};
