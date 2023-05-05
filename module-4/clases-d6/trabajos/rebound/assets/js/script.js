
function formatoDato(valor) {
    if (valor < 10) {
        return "0" + valor
    } return valor;
}

const mostrar = (pais, horas)=>{
    let fecha = new Date();
    let hora = formatoDato(fecha.getHours());
    let minutos = formatoDato(fecha.getMinutes());
    let segundos = formatoDato(fecha.getSeconds());
    document.getElementById(pais).innerText = `${parseInt(hora)+parseInt(horas)}:${minutos}:${segundos}`;
}
const paises = ()=>{
    setInterval(()=>{
        mostrar('relojCl', 0)
    })    
    let array = [{name:'relojIt', hora:5},{name:'relojUk', hora:7},{name:'relojUs', hora:0},{name:'relojRu', hora:-8},{name:'relojCh', hora:-12},{name:'relojKo', hora:-11}]
    array.forEach((pais, index)=>{
        let {name, hora} = pais
        console.log(name, hora)
        setTimeout(()=>{
            setInterval(() => {
                mostrar(name, hora)
            });          
        }, (index+1)*4000)
    })
}
paises()

/* let italia = ()=>{
    setInterval(()=>{
        mostrar('relojIt')
    },1000)
} */

/* setTimeout(italia, 4000) */
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