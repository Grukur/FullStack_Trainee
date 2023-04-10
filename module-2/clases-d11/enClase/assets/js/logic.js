
// var selectorId = document.getElementById('parrafo').innerHTML;
// console.log(selectorId)
// var selectorEtiqueta = document.getElementsByTagName('h1');
// var selectorClass = document.getElementsByClassName('contenedor');
// var selectorVarios = document.querySelector('.contenedor');
// var selectorTodos = document.querySelectorAll(".contenedor");

/* const { event } = require("jquery") */

// for (let i=0; i<selectorClass.length; i++){
//     console.log(selectorClass[i].innerHTML);
// }


// var creandoElemento = document.createElement('p');
// creandoElemento.textContent = 'Este nodo fue creado desde js';
// document.body.appendChild(creandoElemento); /* lo coloca en body, quedando al final */
// selectorVarios.append(creandoElemento) /* lo coloca dentro del padre que lleva la clase contenedor */

// var nodoPadre = document.querySelector('.contenedor');
// var nodoHijo = document.querySelector('#parrafo');

// nodoPadre.removeChild(nodoHijo);

/* hacen lo mismo */
// var texto = document.getElementById('parrafo').innerHTML='Nuevo texto';
// var texto = document.getElementById("parrafo").innerText="Nuevo texto";


/* experimento 2 */
/* function mostrarMensaje() {
    document.getElementById('caja2').style.display = 'block';
}

function ocultarMensaje() {
    document.getElementById('caja2').style.display = 'none'
}

function cambiarFondo() {
    document.getElementById('contenido').style.backgroundColor = 'blue';
}

function cambiarTexto() {
    document.getElementById('texto').innerText = 'nuevo texto';
}

function volver() {
    document.getElementById('contenido').style.backgroundColor = 'coral'
}

function origen() {
    document.getElementById('texto').innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae unde accusamus quibusdam, maxime sint, arem autem veniam quod sunt explicabo eligendi maiores porro tempore tenetur quas incidunt laboriosam? Minus"
} */

/* experimento 3 */
/* var count = 1
$('#formulario').submit(function(event){
    event.preventDefault()
    let name = $('#name').val()
    console.log(name)
    let last = $('#lName').val()
    console.log(last)
    let rut = $('#rut').val()
    console.log(rut)
    $('form')[0].reset();
    agreagrUsuario(name, last, rut)

})

function agreagrUsuario (nombre, apellido, rut){
    $('#tbody').append(
        `
        <tr>
        <th scope="row">${count}</th>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${rut}</td>
        </tr>
        `)
        count++
} */

/* Canvas */

$(()=>{
    $('#formulario').submit(function(event){    
        event.preventDefault();
        let pokemon = $('#pokemon').val();
        buscarPokemon(pokemon);

    })
    function buscarPokemon(pokemon){    
        let urlApi = ' https://pokeapi.co/api/v2/pokemon/'+ pokemon

        $.ajax({
            type: 'GET',
            url: urlApi,
            dataType: 'json',
            success: function(response){

                $('#nombre').text(response.name);
                $('#peso').text(response.weight);
                $('#altura').text(response.height);
                $('#exp').text(response.base_experience);

                let stats = response.stats.map(element => {
                    let dato = {y:element.base_stat, label:element.stat.name}
                    return dato;
                    
                });
                dibujarGrafico(stats);
            }
        })
    }

    function dibujarGrafico(stats){
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Desktop Browser Market Share in 2016"
            },
            data: [{
                type: "bar",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: stats
                
            }]
        });
        chart.render();        
    }
})