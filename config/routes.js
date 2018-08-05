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
  //De usuarios
  '/login': 'UserController.viewLogin',
  '/logup': 'UserController.viewLogup',
  'post /login': 'UserController.login',
  'post /logup': 'UserController.logup',
  '/logout': 'UserController.logout',
  'post /auth' : 'UserController.auth',
  '/profile': 'UserController.profile',
  'put /desc': 'UserController.updateDesc',
  'put /pass': 'UserController.updatePass',

  //De asesorías
  '/create': 'AdvisoryController.viewCreate',
  'post /create': 'AdvisoryController.create',
  'get /search': 'AdvisoryController.find',
  'post /porDar': 'AdvisoryController.porDar',
  'post /porTomar': 'AdvisoryController.porTomar',
  'post /request': 'AdvisoryController.request',
  'get /see': 'AdvisoryController.see',
  'delete /:idAse': 'AdvisoryController.destroy',
  '/inspeccionarAsesoria/:idAse': 'AdvisoryController.getOne',
  'put /replyRequest': 'AdvisoryController.replyRequest',
  'get /getRequests': "AdvisoryController.getRequests",
};
