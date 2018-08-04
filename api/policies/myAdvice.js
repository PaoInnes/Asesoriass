module.exports = function(req, res, next) {
  Advisory.findOne({
    asesor: req.session.userId,
    id: req.params.id
  }).exec((err, result) => {
    if (err)
      return res.serverError(err);

    if (!result)
      return res.forbidden('No es tu asesoría (-.-)');
      
    next();
  })
};
