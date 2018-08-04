$("#Registrarse").on("click",()=>{
  let i = 0;
  let form = ["accountNumberUp", "userName", "pass", "pass2"];
  for (var ele of form)
    if ($("#" + ele).val() != "")
      i++;

  if (i == 4){
      if ($("#pass").val() == $("#pass2").val()) {
        // console.log($("#pass").val().length);
        if ($("#pass").val().length > 7) {
          $.ajax({
            url: "/logup",
            method: "post",
            data: {
              userName : $("#userName").val(),
              accountNumber : $("#accountNumberUp").val(),
              pass : $("#pass").val(),
              description : $("#description").val()
            },
          }).done(function(data){
            if (data == "error"){
              swal({
                title: "Ocurrió un error y no te hemos podido registrar): Asegúrate de ingresar datos válidos",
                icon: "error"
              });
            }
            else
            window.location = "/login"

          });
        }
        else
        swal({
          title: "Mínimo 8 caracteres ",
          icon: "error"
        });
      }
      else
        swal({
          title: "Las contraseñas no coinciden ",
          icon: "error"
        });
  }
  else
    swal({
      title: "Épale ",
      text: "Necesitas llenar los campos obligatorios",
      icon: "error",
      button: "OK",
    });

});
