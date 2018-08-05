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
    //Abre home y te devuelve todas las asesorías encontradas, todos lo pueden ver
  //De usuarios
  '/login': 'UserController.viewLogin',
    /*Se activa cuando picas "Ingresar" en nav, te regresa la vista "login", sólo si no has iniciado sesión,
    si ya lo hiciste te redirije a home. Todos pueden acceder a esta acción */
  '/logup': 'UserController.viewLogup',
    //Hace lo mismo que /login
  'post /login': 'UserController.login',
    /*Se activa cuando picas "Ingresar" en login, te regresa la vista home, si logra iniciar sesión,
    sino, te redirije a /pages/login y te dice cuál fue el error. Todos pueden acceder a esta acción, pero si ya iniciaste sesión no podrás abrir la vista */
  'post /logup': 'UserController.logup',
    /*Se activa cuando picas "Registrarme" en logup y sólo todo está bien, te regresa la vista login, para que vuelvas i ingresar tus datos y así empezar
    a  navegar, los errores se mandan en swal, manda que no te han podido registrar si quieres registrarte y ya lo habías hecho.
    Todos pueden acceder a esta acción, pero si ya iniciaste sesión no podrás abrir la vista */
  '/logout': 'UserController.logout',
    /* Se activa con "Cerrar sesión" de nav, borra la sesión y sólo puedes salir si ya ingresaste, te redirije a home*/
  'post /auth' : 'UserController.auth',
    /* Todos pueden acceder, sólo es para colocar los elementos de nav dependiendo si ya ingresaste o no, se activa con un ajax en nav.js*/
  '/profile': 'UserController.profile',
   /* Si ya iniciaste sesión te devuelve pages/profile.js, con tu perfil, sino, regresa forbidden. También devuelve un objeto con tu información del perfil */
  'put /desc': 'UserController.updateDesc',
    /* Se activa con "Actualizar descripción" de profile.ejs, toma el contenido del contentEditable y lo actualiza en el modelo "User",
    sólo pueden acceder a esta acción los usuarios que hayan iniciado sesión, devuele ok jajaja */
  'put /pass': 'UserController.updatePass',
    /* Lo mismo que /desc, pero compara la contraseña vieja y devuelve swal dependiendo de los resultados como: no se puede editar, contraseña incorrecta, no coinciden*/

  //De asesorías
  '/create': 'AdvisoryController.viewCreate',
    /* Checa si ya iniciaste sesión, si sí te lleva a la vista create.js, si no te redirije a home*/
  'post /create': 'AdvisoryController.create',
    /* Crea una asesoría, se activa con el botón "Crear" de create.js, sólo puedes crear si ya iniciaste sesión, devuelve home si se pudo crear sin inconvenientes */
  'get /search': 'AdvisoryController.find',
    /* Se activa con "Buscar" de nav, te redirije a home con el resultado de tu búsqueda, todos pueden buscar asesorías*/
  'post /porDar': 'AdvisoryController.porDar',
    /* Se activa con un ajax de /js/perfil.js, te devuele las asesorías que has creado y sólo pueden acceder los que hayan iniciado sesión  */
  'post /porTomar': 'AdvisoryController.porTomar',
    /* Se activa con un ajax de /js/perfil.js, te devuele las asesorías en las que te han aceptado y sólo pueden acceder los que hayan iniciado sesión  */
  'post /request': 'AdvisoryController.request',
    /* Se activa con un ajax de eventsAdv.js, crea una solicitud, no puedes solicitar una asesoría si no has iniciado sesión, si ya la solicitaste o si eres el creador,
    regresa el error, si hubo alguno o ok sino */
  'get /see': 'AdvisoryController.see',
    /* Todos pueden ver asesorías, regresa la información de una y otras cosas para validar si puedes solicitarla, si eres el profesor, o el estado de tu solicitud,
        se activa dando click en cualquier asesoría de home*/
  'delete /:idAse': 'AdvisoryController.destroy',
    /* Ocurre cuando alguien da click en "ELiminar" de la ventana moda de "¿Estás seguro?", borra la asesoría y las peticiones de ésta, sólo puedes eliminar tus asesorías */
  '/inspeccionarAsesoria/:idAse': 'AdvisoryController.getOne',
    /* Se activa cuando le dals click en "Inspeccionar", de una modal sobre info se la asesoría o en tus asesorías creadas, la opción "Inspeccionar" sólo aparece si es tu asesoría.
    Es para ver las solicitudes y personas inscritas en una asesoría, sólo pueden acceder los creadores de la asesoría y devuelve información de ésta */
  'put /replyRequest': 'AdvisoryController.replyRequest',
    /* Es para aceptar/rechazar una asesoría, sólo pueden contestar los creadores y se activa con los botones que aparecen en las peticiones de cada asesoría en "inspeccionar" */
  'get /getRequests': "AdvisoryController.getRequests",
   /* Obtener las solicitudes a asesorías que has enviado, se manda un ajax desde profile.ejs y devuelve las peticiones que hayas hecho, sólo puedes acceder si has iniciaso sesión*/
};
