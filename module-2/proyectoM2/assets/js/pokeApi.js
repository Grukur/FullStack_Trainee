/* Empezamos con un event listener en el formulario */
let form = document.getElementById("form_pokemon");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let pokemon = $('#nombre').val()

    /* Iniciamos el consumo de la API */
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(pokemon => pokemon.json())
        .then(data => {
            console.log(data)

            /* Creamos un Chart con canvas */
            var chartPokemon = (pokemon) => {

                let stats = pokemon.stats.map(stats => {
                    return { label: stats.stat.name, y: stats.base_stat }
                })

                console.log(stats, ' hola chart');

                var chart = new CanvasJS.Chart("chartContainer", {
                    animationEnabled: true,
                    exportEnabled: true,
                    theme: "light1", // "light1", "light2", "dark1", "dark2"
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
                constructor(nombre, imagen, stats) {
                    this.nombre = nombre;
                    this.imagen = imagen;
                    this.stats = stats;
                }
            }

            /* Creamos la estructura de nuestra card y definimos la data a entregar */
            const cargarPokemon = (info) => {
                let seccionPokemon = document.querySelector("#mostrar_pokemon .row > div");
                seccionPokemon.innerHTML = `
                <div class="card m-auto" style="width: 18rem;">
                    <img src="${info.imagen}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title text-center fs-4 text-capitalize">${info.nombre}</h5>
                        <p class="card-text fs-5"><strong>${info.stats[0].stat.name}:</strong> ${info.stats[0].base_stat}</p>
                        <p class="card-text fs-5"><strong>${info.stats[1].stat.name}:</strong> ${info.stats[1].base_stat}</p>
                        <p class="card-text fs-5"><strong>${info.stats[2].stat.name}:</strong> ${info.stats[2].base_stat}</p>
                        <p class="card-text fs-5"><strong>${info.stats[3].stat.name}:</strong> ${info.stats[3].base_stat}</p>
                        <p class="card-text fs-5"><strong>${info.stats[4].stat.name}:</strong> ${info.stats[4].base_stat}</p>
                        <p class="card-text fs-5"><strong>${info.stats[5].stat.name}:</strong> ${info.stats[5].base_stat}</p>
                    </div>
                </div>
                `
            }

            /* Le pasamos la data a nuestro constructor */
            let objPokemon = new Pokemon(data.name, data.sprites.front_default, data.stats);
            console.log(objPokemon, ' objeto?')

            /* Pasamos nuestro objeto a card y a nuestro chart */
            cargarPokemon(objPokemon);
            chartPokemon(objPokemon);
        })


})

/* Consumimos API */
/* fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(pokemon => pokemon.json())
    .then(data =>{
        console.log(data, ' paso 1 listo ', pokemon)

        class Pokemon{
            constructor(nombre, imagen, stats){
                this.nombre = nombre;
                this.imagen = imagen;
                this.stats = stats;
            }
        }
        
        
        const cargarPokemon = (info) => {
            let seccionPokemon = document.querySelector("#mostrar_pokemon .row > div");
            seccionPokemon.innerHTML = `
            <div class="col">
                    <div class="card m-auto" style="width: 15rem;">
                    <img src="${info.imagen}" class="card-img-top" alt="${info.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${info.nombre}</h5>
                    <p class="card-text"><strong>${info.stats[0].stat.name}:</strong> ${info.stats[0].base_stat}</p>
                    <p class="card-text"><strong>${info.stats[1].stat.name}:</strong> ${info.stats[1].base_stat}</p>
                    <p class="card-text"><strong>${info.stats[2].stat.name}:</strong> ${info.stats[2].base_stat}</p>
                    <p class="card-text"><strong>${info.stats[3].stat.name}:</strong> ${info.stats[3].base_stat}</p>
                    <p class="card-text"><strong>${info.stats[4].stat.name}:</strong> ${info.stats[4].base_stat}</p>
                    <p class="card-text"><strong>${info.stats[5].stat.name}:</strong> ${info.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>
            `        
        }

        const chartPokemon = (dataInfo) => {
            let stats = dataInfo.stats.map(stats => {
                return {label: stats.stat.name, y: stats.base_stat }
            })
        
            console.log(stats);
            
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                title:{
                    text:`Stats de ${dataInfo.nombre}`
                },
                  axisY: {
                  includeZero: true
                },
                dataInfo: [{
                    type: "column",
                    indexLabelFontColor: "#5A5757",
                      indexLabelFontSize: 18,
                    indexLabelPlacement: "outside",
                    dataPoints: stats            
                }]
            });
            chart.render();
        }
        
        let formulario = document.getElementById("form_pokemon");      
        formulario.addEventListener("submit", async (event) => {
            event.preventDefault();
            let pokemon = $('#nombre').val()
            let objPokemon = new Pokemon(data.name, data.sprites.front_default, data.stats);
            console.log(objPokemon)
            cargarPokemon(objPokemon);
            chartPokemon(objPokemon);
            
        })
        
        
    }) */


