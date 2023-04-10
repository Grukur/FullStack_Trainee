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

/* Consumimos API para crear nuestra lista de pokemon */
fetch("https://digimon-api.vercel.app/api/digimon/?limit=200")/* le di un limite de 200 para armar la lista */
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
    })

/* Empezamos con un event listener en el formulario */
let form = document.getElementById("form_pokemon");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let digimon = ''
    /* Usamos un IF para elegir lista o input manual el cual dejamos dominante */
    if ($('#nombre').val() != '') {
        digimon = $('#nombre').val()
    } else {
        digimon = $('#pokemonList').val()
    }
    /* Iniciamos busqueda en api */
    fetch("https://digimon-api.vercel.app/api/digimon/name/" + digimon)
        .then(pokemon => pokemon.json())
        .then(data => {
            console.log(data[0].name)

            /* Creamos la estructura de nuestra card y definimos la data a entregar */
            const cargarDigimon = (info) => {
                document.querySelector("#mostrar_pokemon").innerHTML =
                    `
            <div class="card m-auto w-75" style="width: 18rem;">
                <img src="${info[0].img}" class="card-img-top" alt="">
                <div class="card-body row">
                    <h5 class="card-title text-center fs-4 text-capitalize">${info[0].name}</h5>
                    <hr>
                    <p class="card-text fs-5 text-capitalize"><strong>Level: </strong> ${info[0].level}</p>
                </div>
            </div>
            `
            }
            cargarDigimon(data)
})
})


