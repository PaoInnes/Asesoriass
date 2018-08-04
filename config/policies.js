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
    "*": true,
    profile: 'sessionAuth',
    logout: 'sessionAuth',
    logup: "noSession", //Tal vez ésto no es necesario, pero yolo
    login: "noSession",
    profile: 'sessionAuth',
    updatePass: 'sessionAuth',
    updateDesc: 'sessionAuth',
  },

  AdvisoryController: {
    "*": true,
    create: 'sessionAuth',
    porDar: 'sessionAuth',
    porTomar: 'sessionAuth',
    request: 'sessionAuth',
  },
};
