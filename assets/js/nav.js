var user;

$.ajax({ //Checar si ya Inició sesión, para armar nav dependiendo si sí ingresó o nop
  url: "/auth",
  method: "post",
}).done(function(data){
  user = data;
  let LoggedIn; //no sé ni pq le puse así pero meh jajaja
  if (data == "nope"){
      LoggedIn = "<li class=\"nav-item\">";
        LoggedIn += "<a class=\"nav-link\" href=\"/login\">Ingresar</a>";
      LoggedIn += "</li>";
      LoggedIn += "<li class=\"nav-item\">";
        LoggedIn += "<a class=\"nav-link\" href=\"/logup\">Registrarse</a>";
      LoggedIn += "</li>";
  }
  else {
      LoggedIn ="<li class=\"nav-item dropdown\">";
        LoggedIn +="<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"profile\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">";
          LoggedIn +="Perfil";
        LoggedIn +="</a>";
        LoggedIn +="<div class=\"dropdown-menu\" aria-labelledby=\"profile\">";
          LoggedIn +="<a class=\"dropdown-item\" href=\"/profile\">Mi perfil</a>";
          LoggedIn +="<a class=\"dropdown-item\" href=\"/logout\">Cerrar sesión</a>";
        LoggedIn +="</div>";
      LoggedIn +="</li>";
      LoggedIn += "<li class=\"nav-item\">";
        LoggedIn += "<a class=\"nav-link\" href=\"/create\">Crear asesoría</a>";
      LoggedIn += "</li>";
      // LoggedIn +="<li class=\"nav-item dropdown\">";
      //   LoggedIn += "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"notif\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">";
      //     LoggedIn +="Notif";
      //   LoggedIn +="</a>";
      //   LoggedIn +="<div class=\"dropdown-menu\" aria-labelledby=\"notif\"></div>";
      // LoggedIn +="</li>";
  }
  $("#cambio").append(LoggedIn);
});

// $("#add").on(click)
