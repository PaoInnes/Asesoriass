/**
 * AdvisoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create:async function(req, res) {
    try {
      await Advisory.create({
        accountNumber: req.session.id,
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
      return res.view("pages/home",{"advs": JSON.stringify(advs)});
    })
  },
  search: async function(req, res) {
     Advisory.find({subject : req.query.subject})
    .exec((err, ases)=>{
      if (err) {
        return res.serverError();
      }
      else {
        return res.view("pages/home",{"advs": JSON.stringify(ases)});
      }
    });
  }
};
