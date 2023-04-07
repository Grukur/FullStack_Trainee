

function nameForm(event){
    alert(`El campo ${event.name} es obligatorio`)
}

function exitoContacto(){
    nombreForm = document.getElementById('nombre');
    correoForm = document.getElementById('correo');
    telefonoForm = document.getElementById('telefono');
    motivoForm = document.getElementById('motivo');
    comentariosForm = document.getElementById('comment')


    alert(`Muchas gracias ${nombreForm.value}, hemos recibido su sugerencia y le enviaremos una pronta respuesta a: ${correoForm.value} o a su telefono ${telefonoForm.value}`)
}

function exitoReserva(){
    nombreForm = document.getElementById('nombre');
    correoForm = document.getElementById('correo');
    telefonoForm = document.getElementById('telefono');
    fechaForm = document.getElementById('fecha');
    horaForm = document.getElementById('hora')
    asistentesForm = document.getElementById('asistentes')


    alert(`Muchas gracias ${nombreForm.value}, hemos agendado su reserva para el día ${fecha.value} a las ${hora.value}, le enviaremos su reserva al correo ${correoForm.value} lo esperamos para una mesa de ${asistentesForm.value} comenzales`)
}
