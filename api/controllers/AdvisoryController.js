/**
 * AdvisoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewCreate: function(req, res) {
    if (req.session.userId)
      return res.view("pages/createAdv");
    else
      return res.redirect("/");
  },
  create: async function(req, res) {
    try {
      await Advisory.create({
        asesor: req.session.userId,
        quota: req.body.quota,
        days: req.body.days,
        starts: req.body.starts,
        ends: req.body.ends,
        classroom: req.body.classroom,
        subject: req.body.subject,
        description: req.body.desc,
      });
      return res.ok();
    } catch (error){
        res.serverError(error);
    }
  },
  getAll: function(req,res) {
    Advisory.find().exec((err,advs)=>{
      if (err) {
        return ser.serverError();
      }
      return res.view("pages/home", {"ases": advs});
    })
  },
  find: function(req, res) {
     Advisory.find({subject : req.query.subject})
    .exec((err, ases)=>{
      if (err)
        return res.serverError();
      else
        return res.view("pages/home", {"ases": ases});

    });
  },
  porDar:function(req,res) {
    Advisory.find({asesor: req.session.userId})
    .exec((err, ases)=>{
      // console.log(ases);
      if (err) {
        return res.serverError();
      }
      return res.json(ases);
    });
  },
  porTomar: function(req, res){
    Asesorados.find({
      asesorado: req.session.userId,
      estado: "Aceptado",
    })
    .populate("asesoria")
    .exec((err, ases)=>{
      var asesorias = new Array();
      for (var i in ases)
        asesorias.push(ases[i].asesoria);

      if (err)
        return res.serverError();

      return res.json(asesorias);

    });
  },
  see: async function(req, res) {
    try {
      // console.log( typeof req.query.idAdv);
      var ase = await Advisory.findOne({id: req.query.idAdv });
      // console.log( ase);
      if (req.session.userId) { //Si está registrado
        if(ase.asesor == req.session.userId) //Si es su asesoría
          return res.json(("[" + JSON.stringify(ase) + ", {\"canRequest\":\"false\"},{\"IsProf\" : \"true\"}]"));
        else {
          // console.log(req.query.idAdv,  req.session.userId);
          var est = await Asesorados.findOne({ //Checar si ya pidió inscribirse
            asesoria : req.query.idAdv,
            asesorado : req.session.userId
          });
          if (est) //Si ya lo pidió, mandar el estado de la petición
            return res.json("["+ JSON.stringify(ase) +",{\"canRequest\":\"true\"},{\"estado\": \""+ est.estado +"\"}]");
          else
            return res.json("["+ JSON.stringify(ase) +",{\"canRequest\":\"true\"}]");
        }
      }
      else
        return res.json("["+ JSON.stringify(ase) +",{\"canRequest\":\"false\"}]");
    } catch (e) {
      // console.log(e);
      return res.serverError();
    }
  },
  request: function(req, res) {
    Asesorados.create({
      asesoria: req.body.idAdv,
      asesorado: req.session.userId
    }).exec((err)=>{
      if (err){
        console.log(err);
        return res.serverError();
      }
      return res.ok();
    });
  },
  getOne: function(req, res) {
    result = new Array();
    Advisory.findOne({ id : req.params.idAse})
    .exec((err, info)=>{
      req.session.inscritos = info.inscritos
      req.session.cupo = info.quota
      // console.log(req.session.inscritos, req.session.cupo);
      result.push(info);
      if (err)
        return res.serverError();
      Asesorados.find({
        asesoria: req.params.idAse,
        estado: { "!=" : "Rechazado"}
      })
      .exec((error, solicitantes)=>{
        if (error)
          return res.serverError();
        result.push(solicitantes)
        // console.log(result);
        return res.view("pages/asesoria", result)
      });
    });
  },
  destroy: async function(req, res){
		await Advisory.destroy({ id: req.params.idAse});
    await Asesorados.destroy({ asesoria: req.params.idAse});
		return res.json("Eliminado");
  },
  replyRequest: async function(req, res) {
    // console.log(req.body);
    if ( (req.session.inscritos < req.session.cupo && req.body.estado == "Aceptado") || req.body.estado == "Rechazado" ){
      try {
        if ( req.body.estado == "Aceptado")
        await Advisory.update(
          {id : req.body.idAse},
          {inscritos : req.body.inscritos}
        );

        await Asesorados.update(
          {id : req.body.idReq},
          {estado : req.body.estado}
        );

        return res.ok();
      } catch (e) {
        // console.log(e);
        return res.serverError();
      }
    }
    else
      return res.redirect("/inspeccionarAsesoria/" + req.body.idAse);
  },
  getRequests: function(req, res) {
    Asesorados.find({
      asesorado: req.session.userId,
      estado: { "!=" : "Aceptado"}
    })
    .populate('asesoria')
    .exec((error, result)=>{
      if (error)
        return res.serverError();

      // console.log(result);
      return res.json(result);
    })
  },
  // aumCupo: function(req, res) {
  //   if (req.body.quota <= 20){
  //     Advisory.update(
  //       {id : req.body.idAse},
  //       {quota : req.body.quota}
  //     ).exec((err)=>{
  //       if (err)
  //         return res.serverError();
  //       return res.ok()
  //     })
  //   }
  //   else
  //     return res.redirect("/inspeccionarAsesoria/" + req.body.idAse);
  // }
};
