/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝


  '/': {
    view: 'pages/home'
  },
  '/login': {
    view: 'pages/login'
  },
  '/logup': {
    view: 'pages/logup'
  },
  'post /login': 'UserController.login',
  'post /logup': 'UserController.logup',
  '/logout': 'UserController.logout',
  'post /auth' : 'UserController.auth',


};
