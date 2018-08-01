$.ajax({
  url: "/auth",
  method: "post",
}).done(function(data){
  let LoggedIn;
  if (data == "nope"){
    LoggedIn = "<ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">";
      LoggedIn += "<li class=\"nav-item disabled\">";
        LoggedIn += "<a class=\"nav-link\" href=\"/login\">Ingresar</a>";
      LoggedIn += "</li>";
      LoggedIn += "<li class=\"nav-item\">";
        LoggedIn += "<a class=\"nav-link\" href=\"/logup\">Registrarse</a>";
      LoggedIn += "</li>";
    LoggedIn += "</ul>";
  }
  else {
    LoggedIn ="<ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">";
      LoggedIn +="<li class=\"nav-item dropdown\">";
        LoggedIn +="<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"profile\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">";
          LoggedIn +="Perfil";
        LoggedIn +="</a>";
        LoggedIn +="<div class=\"dropdown-menu\" aria-labelledby=\"profile\">";
          LoggedIn +="<a class=\"dropdown-item\" href=\"#\">Mi perfil</a>";
          LoggedIn +="<a class=\"dropdown-item\" href=\"/logout\">Cerrar sesión</a>";
        LoggedIn +="</div>";
      LoggedIn +="</li>";
      LoggedIn +="<li class=\"nav-item dropdown\">";
        LoggedIn += "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"notif\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">";
          LoggedIn +="Notif";
        LoggedIn +="</a>";
        LoggedIn +="<div class=\"dropdown-menu\" aria-labelledby=\"notif\"></div>";
      LoggedIn +="</li>";
    LoggedIn +="</ul>";
  }
  $("#cambio").append(LoggedIn);
});
