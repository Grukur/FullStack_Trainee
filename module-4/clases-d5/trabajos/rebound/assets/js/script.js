function mostrarHora() { 
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

