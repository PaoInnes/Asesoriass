/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,

  UserController: {
    profile: 'sessionAuth',
    logout: 'sessionAuth',
    profile: 'sessionAuth',
    updatePass: 'sessionAuth',
    updateDesc: 'sessionAuth',
  },

  AdvisoryController: {
    create: 'sessionAuth',
    porDar: 'sessionAuth',
    porTomar: 'sessionAuth',
    request: 'sessionAuth',
    destroy: ['sessionAuth', 'myAdvisory'],
    update: ['sessionAuth', 'myAdvisory'],
    getOne: ['sessionAuth', 'myAdvisory'],
    replyRequest: ['sessionAuth', 'myAdvisory'],
    aumCupo: ['sessionAuth', 'myAdvisory'],
  },

};
