module.exports = function(req, res, next) {
  Advisory.findOne({
    asesor: req.session.userId,
    id: req.params.idAse
  }).exec((err, result) => {
    // console.log(req.session.userId, req.params.idAse);
    // console.log(result,"-----");
    if (err)
      return res.serverError(err);

    if (!result || !req.session.userId)
      return res.forbidden('No es tu asesoría (-.-)');

    next();
  })
};
