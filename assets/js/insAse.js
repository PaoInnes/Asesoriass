var solicitantes = $("#pasar").html();
solicitantes = JSON.parse(solicitantes);
$("#pasar").remove();
var idAsesoria = $("body")[0].id;
var ins = $("#cupo").html();
ins = ins.split("/");
// ins [0] = parseInt[]
// console.log(ins);

for (i in solicitantes) { //Agregar los solicitantes
  if (solicitantes[i].estado == "Aceptado")
    var maq = "<li class=\"list-group-item list-group-item-action list-group-item-success\">"+ solicitantes[i].asesorado +"</li>";

  else if (solicitantes[i].estado == "Pendiente") {
    var maq = "<li class=\"list-group-item list-group-item-action list-group-item-dark\" >"+ solicitantes[i].asesorado;
          maq += "<button type=\"button\" class=\"btn btn-outline-success justify-content-end entra\" id=\"Aceptado-"+ solicitantes[i].id +"\">Aceptar</button>";
          maq += "<button type=\"button\" class=\"btn btn-outline-danger justify-content-end\" id=\"Rechazado-"+ solicitantes[i].id +"\">Rechazar</button>";
        maq += "</li>";
  }
  $("#contenedor" + solicitantes[i].estado).append(maq);
}

$("#contenedorPendiente").on("click",(ev)=>{
if (ev.target.id.substr(0,8) == "Aceptado" | ev.target.id.substr(0,9) == "Rechazado") {
  let puedeAceptar = (parseInt(ins[0]) < parseInt(ins[1]))? true : false;
  // console.log(puedeAceptar);
  let request = ev.target.id.split("-");
  // console.log(request);
  if ((puedeAceptar && request [0] == "Aceptado") || request[0] == "Rechazado") {
    $.ajax({
      url: "/replyRequest",
      method: "put",
      data: {
        idReq : parseInt(request [1]),
        estado : request [0],
        idAse : parseInt(idAsesoria),
        inscritos : parseInt(ins[0]) + 1,
      }
    })
    .done(()=>{
      let icono = (request[0] == "Aceptado") ? "success" : "error"
      swal({
        title: "Se ha "+ request[0] +" la solicitud",
        icon: icono,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "OK",
      })
      .then(()=>{
        window.location= "/inspeccionarAsesoria/" + idAsesoria;
      })
    })
    .fail(()=>{
      swal({ title: "Inténtalo más tarde", icon: "error" });
    });
  }
  else{
    swal({
    title: "Ya no puedes aceptar más personas :(",
    icon: "error"
    });
  }
}
});

$("#DESTROY").on("click",()=>{
// console.log(idAsesoria);
$.ajax({
  url: "/"+ idAsesoria,
  method: "delete"
})
.done(()=>{
  window.location = "/profile";
})
.fail(()=>{
  swal({ title: "Inténtalo más tarde", icon: "error" });
})
.always(()=>{ $("#modalELiminar").modal("hide"); });
});
