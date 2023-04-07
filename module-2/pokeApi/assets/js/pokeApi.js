





/* Consumimos API */
fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(pokemon => pokemon.json())
    .then(data =>{

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

        const chartPokemon = (data) => {
            let stats = data.stats.map(stats => {
                return {label: stats.stat.name, y: stats.base_stat }
            })
        
            console.log(stats);
            
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                title:{
                    text:`Stats de ${data.nombre}`
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
        
        let formulario = document.getElementById("form_pokemon");      
        formulario.addEventListener("submit", async (event) => {
            event.preventDefault();
            let pokemon = $('#nombre').val()
            console.log(data)
            let objPokemon = new Pokemon(pokemon.name, pokemon.sprites.front_default, pokemon.stats);
            cargarPokemon(objPokemon);
            chartPokemon(objPokemon);
            
        })
        
        
    })


