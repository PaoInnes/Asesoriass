$("#create").on("click",()=>{
  var days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]; //Al parecer lo de ejs no se puede utilizar aquí
  let daysChecked = new Array;
  let ok = 0;
  var elements = ["materia", "cupo", "empieza", "termina", "salon"];

  for (day of days) //Chechar que haya marcado al menos un día
    if ($("#" + day). prop("checked"))
      daysChecked.push(day);

  for (ele of elements) //Checar que haya llenaro todos los campos
    if ($("#"+ ele).val() != "")
      ok++;


  if (ok == 5 && daysChecked != ""){
    let ends = parseInt($("#termina").val())
    let starts = parseInt($("#empieza").val())
    if( (starts < ends) && (7<=starts) && (starts<=20) && (8<=ends) && (ends<=21) ){
      if ($("#descripcion").val().length < 101 && $("#cupo").val() < 21){
        $.ajax({
          url: "/create",
          method: "post",
          data:{
            subject : $("#materia").val(),
            quota : $("#cupo").val(),
            starts : $("#empieza").val(),
            ends : $("#termina").val(),
            classroom : $("#salon").val(),
            days : daysChecked,
            desc: $("#descripcion").val(),
          }
        }).done(()=>{
          window.location= "/";
        }).fail((error)=>{
          swal({ title: "Regístrate o inicia sesión apara poder crear una asesoría", icon: "error" });
        });
      }
      else
        swal({title: "Sólo puedes aceptar 20 compañeros, y máximo 100 caracteres el la descripción",icon: "error",});

    }
    else
      swal({
        title: "Ingresa un horario válido",
        icon: "error",
        text: "Está permitido desde las 7:00 hasta las 21:00. Puede comenzar después de las 7am y hasta las 8pm, terminar después de las 8am y hasta las 9pm y durar mínimo una hora",
      });
  }
  else
    swal({title: "Asegúrate de ingresar datos correctos y llenar todos los campos :)",icon: "error",});

});
