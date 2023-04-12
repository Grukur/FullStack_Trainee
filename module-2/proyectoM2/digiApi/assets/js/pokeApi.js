/* const { event } = require("jquery") */

/* Show and Hide parraph in Index.html */
$(() => {
    /* muestra y cierra Hisotria */
    $('#history').click(function () {
        $('#historyP').css('display', 'block')
    })
    $('#historyClose').click(function () {
        $('#historyP').css('display', 'none')
    })
    /* muestra y cierra Extra */
    $('#extra').click(function () {
        $('#extraP').css('display', 'block')
    })
    $('#extraClose').click(function () {
        $('#extraP').css('display', 'none')
    })
    /* Limpia buscador */
    $('#pokemonList').mouseenter(function () {
        $('#nombre').val('')
    })
})
/* creamos funcion para consumo de API */
function cargarDigimons() {
    let url = "https://digimon-api.vercel.app/api/digimon/"
    fetch(url)
        .then(info => info.json())
        .then(lista => {

            /* Creamos nuestra lista y galeria */
            for (i in lista) {
                $('#pokemonList').append(`<option>${lista[i].name}</option>`)
                $('#carrusel').append(`<div class="carousel-item text-center">
                        <img src="${lista[i].img}" class="d-block w-100" alt="...">
                        <h4 class="text-capitalize text-black">${lista[i].name}</h4>
                    </div>`)
            }
            /* creamos un evento preventDefault */
            $('#form_pokemon').submit(function (event) {
                event.preventDefault()
                let digimon = ''
                /* Usamos un IF para elegir lista o input manual el cual dejamos dominante */
                if ($('#nombre').val() != '') {
                    /* aplicamos mayuscula al inicio del texto ingresado manualmente */
                    digimon = ($('#nombre').val()).charAt(0).toUpperCase() + ($('#nombre').val()).slice(1);
                } else {
                    digimon = $('#pokemonList').val()
                }

                /* creamos un if nested dentro de un for para obtener el array de nuestra key */
                for (i in lista) {
                    let nameDigi = lista[i].name
                    if (digimon === nameDigi)
                        var targetDigi = lista[i]
                }

                /* Creamos la estructura de nuestra card y definimos la data a entregar */
                const cargarDigimon = (info) => {
                    document.querySelector("#mostrar_pokemon").innerHTML = `
                 <div class="card m-auto bg-warning-subtle">
                     <img src="${info.img}" class="card-img-top" alt="">
                     <div class="card-body row">
                         <h5 class="card-title text-center fs-4 text-capitalize">${info.name}</h5>
                         <hr>
                         <p class="card-text fs-5 text-capitalize"><strong>Level: </strong> ${info.level}</p>
                     </div>
                 </div>`
                }
                cargarDigimon(targetDigi)

                /* inventamos stats */
                let hp = Math.floor(Math.random() * 200) + 50
                let stamina = Math.floor(Math.random() * 100) + 20
                let speed = Math.floor(Math.random() * 100) + 10
                let attack = Math.floor(Math.random() * 300) + 80
                let magic = Math.floor(Math.random() * 300) + 80

                /* chart 1 */
                var chart = new CanvasJS.Chart("chartContainer", {
                    theme: "dark2", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: `Stats de ${targetDigi.name}`
                    },
                    data: [{
                        type: "column",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}",
                        showInLegend: "false",
                        legendText: "{label}",
                        indexLabelFontSize: 20,
                        indexLabel: "{y}",
                        dataPoints: [
                            { y: hp, label: "HP" },
                            { y: stamina, label: "Stamina" },
                            { y: speed, label: "Speed" },
                            { y: attack, label: "Attack" },
                            { y: magic, label: "Magic" }
                        ]
                    }]
                });
                chart.render();

                /* chart 2 */
                var chart2 = new CanvasJS.Chart("chartContainer2", {
                    theme: "dark2", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: `Stats de ${targetDigi.name}`
                    },
                    data: [{
                        type: "column",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}",
                        showInLegend: "false",
                        legendText: "{label}",
                        indexLabelFontSize: 20,
                        indexLabel: "{y}",
                        dataPoints: [
                            { y: hp, label: "HP" },
                            { y: stamina, label: "Stamina" },
                            { y: speed, label: "Speed" },
                            { y: attack, label: "Attack" },
                            { y: magic, label: "Magic" }
                        ]
                    }]
                });
                chart2.render();

            })
        })
        .catch((error) => {
            console.error(error)
        })
}
cargarDigimons()






