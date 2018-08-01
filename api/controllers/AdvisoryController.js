/**
 * AdvisoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create:async function(req, res) {
    try {
      let advi = await Advisory.create({
        accountNumber: req.session.id,
        quota: req.body.quota,
        days: req.body.days,
        starts: req.body.starts,
        ends: req.body.ends,
        classroom: req.body.classroom,
        subject: req.body.subject
      }).fetch();

    } catch (error){
      console.log(error);;
    }
  }
};
