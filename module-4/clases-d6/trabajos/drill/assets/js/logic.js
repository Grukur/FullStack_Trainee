
let contador = 0;
let intervalo;
let vistaContador = document.getElementById("here");

const actualizarContador = () => {
    if (contador < 10) {
        vistaContador.innerText = "0" + contador;
    } else {
        vistaContador.innerText = contador;
    }
    contador--;
}

const iniciar = () => {
    let valor = parseInt(seconds.value);
    vistaContador.innerText = valor;
    contador = valor;
    intervalo = setInterval(actualizarContador, 1000) 
}

const cancelar = () => {
    clearInterval(intervalo);
    vistaContador.innerText = "00"
}