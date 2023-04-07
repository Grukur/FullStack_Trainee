
var selectorId = document.getElementById('parrafo').innerText;
console.log(selectorId + ' id')
var selectorEtiqueta = document.getElementsByTagName('h1');
console.log(selectorEtiqueta + ' tag')
var selectorClass = document.getElementsByClassName('contenedor');
console.log(selectorClass + ' class')


// var selectorId = document.getElementById('parrafo').innerHTML;
// console.log(selectorId)
// var selectorEtiqueta = document.getElementsByTagName('h1');
// var selectorClass = document.getElementsByClassName('contenedor');
// var selectorVarios = document.querySelector('.contenedor');
// var selectorTodos = document.querySelectorAll(".contenedor");

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
function mostrarMensaje() {
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
}