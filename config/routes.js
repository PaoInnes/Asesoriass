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


  '/': 'AdvisoryController.getAll',

  //de usuarios
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
  '/profile': 'UserController.profile',
  'put /desc': 'UserController.updateDesc',
  'put /pass': 'UserController.updatePass',

  //De asesorías
  '/create': {
    view: 'pages/createAdv'
  },
  'post /create': 'AdvisoryController.create',
  'get /search': 'AdvisoryController.find',
  'post /porDar': 'AdvisoryController.porDar',
  'post /porTomar': 'AdvisoryController.porDar',
  'post /request': 'AdvisoryController.request',
  'get /see': 'AdvisoryController.see',


};
