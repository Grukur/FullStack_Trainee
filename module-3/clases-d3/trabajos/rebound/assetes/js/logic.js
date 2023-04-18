/* 
$('#selector').click(function(){
    if($('#selector').val() == 'Trecking'){
        $('#photo').attr('src', './assetes/img/trecking.png')
        $('#treckingText').toggleClass('d-none', 'd-block')
        $('#natacionText').toggleClass('d-block', 'd-none')
        $('#ferryText').toggleClass('d-block', 'd-none')   */
/* $('#location').text(`<img src="${'../img/map.png'}"></img>Cumbes del lilo`) */
/*     }else if($('#selector').val() == 'Natación'){
        $('#photo').attr('src', './assetes/img/Natacion.png')
        $('#treckingText').toggleClass('d-block', 'd-none')
        $('#natacionText').toggleClass('d-none', 'd-block')
        $('#ferryText').toggleClass('d-block', 'd-none')
    }else if($('#selector').val() == 'Ferry'){
        $('#photo').attr('src', './assetes/img/Ferry.png')
        $('#treckingText').toggleClass('d-block', 'd-none')
        $('#natacionText').toggleClass('d-block', 'd-none')
        $('#ferryText').toggleClass('d-none', 'd-block')
    }
}) */

/* $('#photo').on('mouseover', function(){
    if($('#photo')){
        $('#activity').text(`${$('#selector').val()}`)
        $('#location').append(`<img src="${'../img/map.png'}"></img>Cumbes del lilo`)
        $('#mouseOver').toggleClass('d-none', 'd-block')
    }
})
 */
let actividades = []
actividades['trecking'] = {
    nombre: 'Trecking',
    locacion: 'Cumbres del Lilo, Santiago',
    fondo: '',
    imagen: 'Trecking.png',
    descripcion: "Modalidad de escursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional."
}
actividades['natacion'] = {
    nombre: 'Natacion',
    locacion: 'Lago del Lilo, Puerto Varas',
    fondo: '',
    imagen: 'Natacion.png',
    descripcion: "Deporte o ejercicio que consiste en nadar; en las pruebas de natacion se compite en velocidad, en cualquier de los cuatro estilos: braza, crol, espalda y mariposa."
}
actividades['ferry'] = {
    nombre: 'Ferry',
    locacion: 'Rio el Lilo, El Maule',
    fondo: '',
    imagen: 'Ferry.png',
    descripcion: "Embarcacion que realiza alternativamente el mismo recorrido entre dos puntos: especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros."
}

$('#selector').change(function (event) {
    $('#show').css('display', 'none')
    $('#photo').css('opacity', '1')
    show($(this).val())
})

const show = (actividad) => {
    let objAct = actividades[actividad]
    $('#photo').attr('src', `./assetes/img/${objAct.imagen}`)
    $(`#text`).text(`${objAct.descripcion}`)
}

$('#photo').click(function (event) {
    $('#show').toggle('display')
    if ($('.bg-image').css('opacity') == '1') {
        $('.bg-image').css('opacity', '0.3')
    } else {
        $('.bg-image').css('opacity', '1')
    }
    shadow($('#selector').val())
})

const shadow = (actividad) => {
    let objSha = actividades[actividad]
    $('#activity').text(objSha.nombre)
    $('#location').text(objSha.locacion)
    $('#mouseOver').toggle()
}


