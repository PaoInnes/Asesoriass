module.exports = function(req, res, next) {
  Asesorados.findOne({
    asesoria: req.body.idAdv,
    or : [{asesorado: req.session.userId},
          {asesor: req.session.userId}]
  })
  .populate("asesoria")
  .exec((err, result)=>{
    if (err)
      return res.serverError();
    if (result)
      return res.redirect("/");
    return next();
  });
};
