

let busquedaNombre = document.getElementById("busquedaNombre");
let busquedaNivel = document.getElementById("busquedaNivel");
let formCrearDigimon = document.getElementById("formCrearDigimon");


const urlBase = 'http://localhost:3000/api/digimones/';

const getData = (path) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(`${urlBase}${path}`);
            let data = await response.json();
            if (response.status == 200) {
                // console.log(data);
                resolve(data);
            } else if (response.status == 404) {
                alert("Pokemon no encontrado");
            } else {
                alert("Algo salió mal");
            }
        } catch (error) {
            console.log(error);
            reject("No se pudo hacer la peticion");
        }
    });
};

busquedaNombre.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = searchNombre.value;
    getData(`nombre/${nombre}`)
        .then(digimon => {
            cardTitle.innerHTML = digimon.name;
            cardDescription.innerHTML = digimon.level;
            cardImg.setAttribute('src', digimon.img);
            cardImg.setAttribute('alt', digimon.name);
            card.classList.remove('d-none')
        });        
});

busquedaNivel.addEventListener('submit', (e) => {
    e.preventDefault();
    let nivel = nivelDigimon.value;
    if (nivel == 'default') {
        return alert('Escoja un nivel')
    }
    
    getData(`nivel/${nivel}`)
    .then(digimones => {
        let tablaDigimones = document.querySelector("#tablaDigimones tbody");
            let filas = '';

            let contador = 1;
            for (const digimon of digimones) {
                filas += `<tr>
                            <th scope='row>${contador}</th>
                            <td>${digimon.name}</td>
                            <td>${digimon.level}</td>
                            <td><img src="${digimon.img}" width="50px"></img></td>
                        </tr>`;
                contador++;
            }
            tablaDigimones.innerHTML = filas;
        })
        .catch((error) => {
            alert(`${error} Error al buscar los digimones`)
        });
});

formCrearDigimon.addEventListener('submit', async(e)=>{
    e.preventDefault();
    try{
        let nuevoDigimon = {
            name: formCrearDigimon.createNombre.value,
            img: formCrearDigimon.createImagen.value,
            level: formCrearDigimon.createNivel.value
        };

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(nuevoDigimon),
            redirect: 'follow'
        };

        let response = await fetch('http://localhost:3000/api/digimones', requestOptions);
        let data = await response.json();

        if(response.status == 201){
            alert(`Se creo correctamente el digimon: ${data.name}`);
            formCrearDigimon.reset();
        }else {
            alert('Error al crear el Digimon')
        }
    } catch (error){
        alert(`Error al crear el Digimon: ${error}`);
    }
});

