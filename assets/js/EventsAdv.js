var idAsesoriaActual;
  $(".verAse").on("click",(ev)=>{
    idAsesoriaActual = $(ev.target).attr("id");

    let espera = new Promise ((resolve, reject)=>{
      // console.log(idAsesoriaActual);
      $.ajax({
        url: "/see",
        method: "get",
        data: { idAdv : idAsesoriaActual}
      })
      .done((resp)=>{
        resolve(JSON.parse(resp))
      })
      .fail((error)=>{
        reject(error);
      })
    })
    .then((asesoria)=>{
      // console.log(asesoria);
      // console.log(asesoria[1].canRequest);
      $("#editarAse").remove();
      $("#estadoSoli").remove();
      if ( asesoria[1].canRequest == "false" || asesoria[0].inscritos == asesoria[0].quota) //Checar si se puede inscribir y aún hay cupo
        $("#soliAse").hide();
      else
        $("#soliAse").show();

      if( typeof asesoria[2] != "undefined" ){

        if ( asesoria[2].hasOwnProperty("IsProf"))
          $("#bodyModalAse").append("<button id=\"editarAse\" class=\"btn btn-outline my-sm-0\"><a href=\"inspeccionarAsesoria/"+ idAsesoriaActual +"\">Inspeccionar</a></button>");

        if ( asesoria[2].hasOwnProperty("estado")){
          $("#soliAse").hide();
          $("#bodyModalAse").append("<div class=\"card card-body\" id=\"estadoSoli\">Solicitud de asesoría: " + asesoria[2].estado +"</div>"); //Esto podría ser un ícono bello
        }

      }

      //Appendear a la modal el contenido de la asesoría
      $("#asesor").html("Asesor: " + asesoria[0].asesor); //Ya sé que da asco, pero lo intenté de mil formas y fracasé
      $("#subject").html("Asesoría sobre: " + asesoria[0].subject);
      $("#days").html("Días en los que se imparte: " + asesoria[0].days);
      $("#quota").html("Cupo: "+ asesoria[0].inscritos + "/" +asesoria[0].quota);
      $("#horario").html("Horario:" + asesoria[0].starts +"-"+ asesoria[0].ends);
      $("#classroom").html("Salón: " + asesoria[0].classroom);
      var descripcion = (asesoria[0].description != "")? asesoria[0].description : "Esta asesoria no tiene descripción"
      $("#description").html("Descripción: " + descripcion);

      $("#modalAse").modal("show"); //Mostrar la modal con todo
    }).catch((err)=>{
      swal({ title: "Inténtalo más tarde", icon: "error" });
    });
  });

  //Solicitar asesorías
  $("#soliAse").on("click",()=>{
    $.ajax({
      url: "/request",
      data: { idAdv: idAsesoriaActual },
      method: "post"
    })
    .done(()=>{
      swal({ title: "Tu solicitud fue enviada, espera a que el asesor la conteste", icon: "success" });
    })
    .fail(()=>{
      swal({ title: "Inténtalo más tarde", icon: "error" });
    })
    .always(()=>{ $("#modalAse").modal("hide"); });
  })
