

let fecha = new Date();

function getHour(){
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    return `${hora}:${minutos}`;
}

document.getElementById('reloj').innerText = getHour()

$('#reloj').append(`<p>${getHour()}</p>`)

$8('#reloj2').innerText