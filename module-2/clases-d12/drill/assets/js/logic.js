
/* Abrimos JQuery por buena practica para capturar formularios */
$(()=>{
    /* Capturamos formulario de contacto */
    $('#buttonForm').click(function(){
        let nombreForm = $('#nombre').val();
        let correoForm = $('#correo').val();
        let telefonoForm = $('#telefono').val();
        let motivoForm = $('#motivo').val();
        let comentariosForm = $('#comment').val();
        
        alert(`Muchas gracias ${nombreForm}, hemos recibido su sugerencia y le enviaremos una pronta respuesta a: ${correoForm} o a su telefono ${telefonoForm}`);

    })
    /* Capturamos formulario de reserva */
    $('#buttonReserve').click(function(){
        let nombreForm = $('#nombre').val();
        let correoForm = $('#correo').val();
        let telefonoForm = $('#telefono').val();
        let fechaForm = $('#fecha').val();
        let horaForm = $('#hora').val();
        let asistentesForm = $('#asistentes').val();

        alert(`Muchas gracias ${nombreForm}, hemos agendado su reserva para el día ${fechaForm} a las ${horaForm}, le enviaremos su reserva al correo ${correoForm} lo esperamos para una mesa de ${asistentesForm} comenzales`)

    })

    /* pop up image */   
    $(document).ready(function(){
        $('.pop').on('click', function() {
            $('#popTitle').text($(this).find('h5').text())
            $('#popInfo').text($(this).find('p').text())
            $('#popImg').attr('src', $(this).find('img').attr('src'));
            $('#image-pop-up').show();
        });
        
        $('#image-pop-up').on('click', function() {
            $(this).hide();
        });
       
    });
})

/* Mantenemos nuestra alerta en caso de un campo vacio */
function nameForm(event){
    alert(`El campo ${event.name} es obligatorio`)
}




/*
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
} */




