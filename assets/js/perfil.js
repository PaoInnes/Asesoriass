    function getAdvs(ele) {
      $.ajax({
        url: "/"+ele,
        method: "POST",
      }).done((response)=>{
        // var aux = JSON.parse(response);
        for (var ase of response)
          if ( ase ){
            let esSuya = (ele == "porDar")? "inspeccionarAsesoria/"+ ase.id : "#" ;
            let maq = "<div class=\"container\" style=\"margin-top: 15px;\" >"
              maq += "<a href=\"" + esSuya + "\" class=\"list-group-item list-group-item-action flex-column align-items-start\">"
                maq += "<div class=\"d-flex w-100 justify-content-between\">"
                  maq += "<h5 class=\"mb-1\">"+ ase.subject +"</h5>"
                  maq += "<small>"+ ase.starts +"-"+ ase.ends +"</small>"
                maq += "</div>"
                maq += "<p class=\"mb-1\">"+ ase.description +"</p>"
                maq += "<small>" + ase.days + "</small>"
              maq += "</a>"
            maq += "</div>"
            $("#"+ ele).append(maq);
          }
      });
    }

    getAdvs("porDar");
    getAdvs("porTomar");

    //Editar info
    $("#desc").on("click",()=>{
      let newDesc = $("#newDesc").html();
      $.ajax({
        url: "/desc",
        data: {
          new : newDesc,
        },
        method: "put"
      })
      .done(()=>{
        swal({title: "Se actualizó tu descripción", icon: "success"});
      })
      .fail(()=>{ swal({ title: "No se puede actualizar en este momento, intenta más tarde", icon: "error" }); });
    });

    //Obtener las solicitudes que ha enviado
    $.ajax({
      url: '/getRequests',
      method: 'get',
    })
    .done((response)=>{
      console.log(response);
      for (var ase of response)
        if ( ase ){
          console.log(ase);
          let clase = (ase.estado == "Rechazado")? "list-group-item-danger" : "list-group-item-light"
          let maq = "<a class=\"list-group-item " + clase + " flex-column align-items-start\">"
                maq += "<div class=\"d-flex w-100 justify-content-between\">"
                  maq += "<h5 class=\"mb-1\">"+ ase.asesoria.subject +"</h5>"
                  maq += "<small>"+ ase.asesoria.starts +"-"+ ase.asesoria.ends +"</small>"
                maq += "</div>"
                maq += "<p class=\"mb-1\">"+ ase.asesoria.description +"</p>"
                maq += "<small>" + ase.asesoria.days + "</small>"
              maq += "</a>"

          $("#solis").append(maq);
        }
    });

    //Cambiar contraseña
    $("#change").click(()=>{
      pass = $("#pass").val();
      newPass = $("#newpass").val();
      newPass2 = $("#newpass2").val();

      if(pass != "" ){
        // console.log(newPass.length);
        if (newPass2 == newPass) {
          if (newPass.length > 7){
            $.ajax({
              url : "/pass",
              data: {
                new : newPass,
                old : pass,
              },
              method: "put"
            })
            .done((resp)=>{
              if(resp != "bep"){
                swal({title: "Se actualizó tu contraseña", icon: "success"});
                ("#modalPass").modal("hide");
              } else
                swal({ title: "Contraseña incorrecta", icon: "error" });
            })
            .fail(()=>{swal({ title: "No se puede actualizar en este momento, intenta más tarde", icon: "error" });});
          } else
              $(".news").attr({"class":"form-control is-invalid"});
        } else
            swal({ title: "Las contraseñas no coinciden", icon: "error" });
      } else
          $("#pass").attr({"class":"form-control is-invalid","style":"color:red"});

    });
