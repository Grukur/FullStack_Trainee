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
    $('#pokemonList').mouseenter(function (){
        $('#nombre').val('')
    })

})

/* Consumimos API para crear nuestra lista de pokemon */
fetch("https://pokeapi.co/api/v2/pokemon/?limit=200")/* le di un limite de 200 para armar la lista */
    .then(info => info.json())
    .then(lista => {

        /* Creamos nuestra lista y la incorporamos a nuestro selector de Bootstrap */
        for (i in lista.results) {
            $('#pokemonList').append(`<option>${lista.results[i].name}</option>`)
        }

        /* Creamos nuestro Carrusel */
        var imgagenesPoke = []
        for (x in lista.results){
            fetch(lista.results[x].url)
                .then(imagen => imagen.json())
                .then(images => {
                    imgagenesPoke.push(images.sprites.front_default)
                })
                $('#carrusel').append(`<div class="carousel-item">
                <img src="${imgagenesPoke}" class="d-block w-100" alt="...">
                </div>`)
                console.log(imgagenesPoke[x])
            }

         
    })

/* Empezamos con un event listener en el formulario */
let form = document.getElementById("form_pokemon");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let pokemon = ''
    /* Usamos un IF para elegir lista o input manual el cual dejamos dominante */
    if ($('#nombre').val() != '') {
        pokemon = $('#nombre').val()
    } else {
        pokemon = $('#pokemonList').val()
    }

    /* Iniciamos el consumo de la API on click de nuestro boton*/
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(pokemon => pokemon.json())
        .then(data => {

            /* Creamos un Chart con canvas para mostrar stats */
            var chartPokemon = (pokemon) => {

                let stats = pokemon.stats.map(stats => {
                    return { label: stats.stat.name, y: stats.base_stat }
                })

                var chart = new CanvasJS.Chart("chartContainer", {
                    animationEnabled: true,
                    exportEnabled: true,
                    theme: "light1",
                    title: {
                        text: `Stats de ${pokemon.nombre}`
                    },
                    axisY: {
                        includeZero: true
                    },
                    data: [{
                        type: "column",
                        indexLabelFontColor: "#5A5757",
                        indexLabelFontSize: 18,
                        indexLabelPlacement: "outside",
                        dataPoints: stats
                    }]
                });
                chart.render();
            }

            /* creamos un constructor para manejar la data en nuestro chart y en nuestra card */
            class Pokemon {
                constructor(nombre, imagen, stats, level, height) {
                    this.nombre = nombre;
                    this.imagen = imagen;
                    this.stats = stats;
                    this.level = level;
                    this.height = height;
                }
            }

            /* Creamos la estructura de nuestra card y definimos la data a entregar */
            const cargarPokemon = (info) => {
                let seccionPokemon = document.querySelector("#mostrar_pokemon .row > div");
                seccionPokemon.innerHTML = `
                <div class="card m-auto" style="width: 18rem;">
                    <img src="${info.imagen}" class="card-img-top" alt="">
                    <div class="card-body row">
                        <h5 class="card-title text-center fs-4 text-capitalize">${info.nombre}</h5>
                        <hr>
                        <p class="card-text fs-5 text-capitalize"><strong>${Object.keys(info).find(level => info[level] === info.level)}:</strong> ${info.level}</p>
                        <p class="card-text fs-5 text-capitalize"><strong>${Object.keys(info).find(height => info[height] === info.height)}:</strong> ${info.height}</p>
                        <hr>
                        <p class="card-text fs-5 text-capitalize"><strong>${info.stats[0].stat.name}:</strong> ${info.stats[0].base_stat}</p>
                        <p class="card-text fs-5 text-capitalize"><strong>${info.stats[1].stat.name}:</strong> ${info.stats[1].base_stat}</p>                        
                        <p class="card-text fs-5 text-capitalize"><strong>${info.stats[2].stat.name}:</strong> ${info.stats[2].base_stat}</p>
                        <p class="card-text fs-5 text-capitalize"><strong>${info.stats[3].stat.name}:</strong> ${info.stats[3].base_stat}</p>
                        <p class="card-text fs-5 text-capitalize"><strong>${info.stats[4].stat.name}:</strong> ${info.stats[4].base_stat}</p>
                        <p class="card-text fs-5 text-capitalize"><strong>${info.stats[5].stat.name}:</strong> ${info.stats[5].base_stat}</p>
                    </div>
                </div>
                `
            }

            /* Construimos nuestro objeto */
            let objPokemon = new Pokemon(data.name, data.sprites.front_default, data.stats, data.base_experience, data.height);

            /* Pasamos nuestro objeto a card y a nuestro chart */
            cargarPokemon(objPokemon);
            chartPokemon(objPokemon);
        })
})


