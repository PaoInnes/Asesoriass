module.exports = function(req, res, next) {
  Asesorados.findOne({
    asesoria: req.body.idAdv,
    asesorado: req.session.userId
  })
  .exec((err, result)=>{
    if (err)
      return res.serverError();
    if (result)
      return res.redirect("/");
    return next();
  });
};
