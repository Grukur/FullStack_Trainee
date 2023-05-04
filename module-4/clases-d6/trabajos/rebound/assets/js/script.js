
function formatoDato(valor) {
    if (valor < 10) {
        return "0" + valor
    } return valor;
}

const mostrar = (pais)=>{
    let fecha = new Date();
    let hora = formatoDato(fecha.getHours());
    let minutos = formatoDato(fecha.getMinutes());
    let segundos = formatoDato(fecha.getSeconds());
    document.getElementById(pais).innerText = `${hora}:${minutos}:${segundos}`;
}

let italia = ()=>{
    setInterval(()=>{
        mostrar('relojIt')
    },1000)
}

setTimeout(italia, 4000)
/*     setTimeout(Uk, 8000)
setTimeout(rusia, 12000)
setTimeout(us, 16000)
setTimeout(china, 20000)
setTimeout(korea, 24000) */


/* let reloj = setInterval(mostrar, 1000); */


/* const printer = (hora, minutos, segundos) => {
    document.getElementById("relojCl").innerText = `${hora}:${minutos}:${segundos}`;
    let Uk = document.getElementById("relojUk").innerText = `${hora + 5}:${minutos}:${segundos}`;
    let rusia = document.getElementById("relojRu").innerText = `${hora+7}:${minutos}:${segundos}`;
    let us = document.getElementById("relojUs").innerText = `${hora}:${minutos}:${segundos}`;
    let china = document.getElementById("relojCh").innerText = `${hora-12}:${minutos}:${segundos}`;
    let korea = document.getElementById("relojKo").innerText = `${hora-11}:${minutos}:${segundos}`;   
}
 */

/* function mostrarHora() {
    let fecha = new Date();
    let hora = formatoDato(fecha.getHours());
    let minutos = formatoDato(fecha.getMinutes());
    let segundos = formatoDato(fecha.getSeconds());
    document.getElementById("reloj").innerText = `${hora}:${minutos}:${segundos}`;
}

function formatoDato(valor) {
    if (valor < 10) {
        return "0" + valor
    } return valor;
}

let reloj = setInterval(mostrarHora, 1000);
document.getElementById("accion").addEventListener("click", function () { console.log("hicimos un click!") })
 */