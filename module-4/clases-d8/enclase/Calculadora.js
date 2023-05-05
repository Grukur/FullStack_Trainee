
/* const promesa1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve = 'Promesa 1';
        }, 1000)
    })
};

const promesa2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve = 'Promesa 2';
        }, 1500)
    })
};
const promesa3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve = 'Promesa 3';
        }, 500)
    })
};

let solicitud1 = promesa1();
let solicitud2 = promesa2();
let solicitud3 = promesa3();
let arraySolicitudes = [solicitud1, solicitud2, solicitud3];

Promise.all(arraySolicitudes)
    .then((respuestas) => {
        console.log(respuestas);
    })
    .catch((error) => {
        console.log('Error: ', error)
    }); */

/* profe */
/* const promesa1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa 1");
        }, 1000);
    });
};

const promesa2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa 2");
        }, 1500);
    });
};

const promesa3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promesa 3");
        }, 500);
    });
};

let solicitud1 = promesa1();
let solicitud2 = promesa2();
let solicitud3 = promesa3();
let arraySolicitudes = [solicitud1, solicitud2, solicitud3];

Promise.race(arraySolicitudes)
    .then((respuestas) => {
        console.log(respuestas);
    })
    .catch((error) => {
        console.log("Error: ", error);
    }); */

/* con fetch */
/* const getPokemon = async(id)=>{
    let urlBase = 'https://pokeapi.co/api/v2/pokemon/';
    let response = await fetch(urlBase+id);
    let pokemon = await response.json();
    return pokemon;
};

// let pokemon1 = getPokemon(5);
// pokemon1.then((pokemon)=>{
//     console.log(pokemon.name)
// })

let pokemon1 = getPokemon(5);
let pokemon2 = getPokemon(10);
let pokemon3 = getPokemon(15);

let arrayPeticiones = [pokemon1, pokemon2, pokemon3];
Promise.race(arrayPeticiones).then((respuesta)=>{
    console.log(respuesta.name);
}); */

/* fucniones Iffe y enclosure */
/* let contador = 0;
(function(){
    let boton = document.getElementById('btn');
    boton.addEventListener('click', ()=>{
        contador++;
        console.log(contador);
    });
})
 */

/* $('#btn').on('click', () => {
    $.get('datos.txt', (data, status) => {
        console.log('Status: ', status);
        console.log(data);
    })
}) */
/* let nuevoPost = {
    title: 'nuevo titulo',
    body: 'este es un nuevo documento',
    userId: 1,
}

$.ajax({
    type: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: JSON.stringify(nuevoPost),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (result) {
        console.log(result);
    }
}); */

let btnConsulta = document.getElementById('btnConsulta');
let btnConsulta2 = document.getElementById('btnConsulta2');
let btnConsulta3 = document.getElementById('btnConsulta3');
let btnConsulta4 = document.getElementById('btnConsulta4');
let btnConsulta5 = document.getElementById('btnConsulta5');

// Para archivo local (Hay que tener un archivo en la carpeta del proyecto)
btnConsulta.addEventListener('click', function () {
	$.get('personajes.json', function (data, status) {
		console.log('Status: ', status);
		data.personajes.forEach((element) => {
			console.log(element.nombre);
		});
	});
});

// Para API
let url = 'https://jsonplaceholder.typicode.com/posts/1';
btnConsulta2.addEventListener('click', () => {
	$.get(url, (data, status) => {
		console.log(data);
		data.forEach((usuario) => {
			console.log(usuario);
		});
	});
});

let url2 = ' https://pokeapi.co/api/v2/pokemon/100';
btnConsulta3.addEventListener('click', () => {

	$.ajax(url2)
		.done((data, status, xhr) => {
			console.log('Done');
			console.log(data);
			console.log(status);
			console.log(xhr);
		})
		.fail((error) => {
			console.log('Fail');
			console.log(error.responseText);
			console.log('No se pudo acceder a la información');
		});
});

// Post en API Ivan
/* let data = {
	title: 'Prueba post',
	body: 'Esto es una prueba post',
	userId: 100,
};
btnConsulta4.addEventListener('click', () => {
	$.ajax({
		type: 'POST',
		url: 'https://jsonplaceholder.typicode.com/posts',
		data: JSON.stringify(data), // enviar un objeto pero en texto (JSON Stringify)
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function (result) {
			console.log(result);
		},
	});
});

let dataNueva = {
	title: 'Cambiando el post',
	body: '',
	userId: 1,
};
btnConsulta5.addEventListener('click', () => {
	$.ajax({
		type: 'PUT',
		url: 'https://jsonplaceholder.typicode.com/posts/1',
		data: JSON.stringify(dataNueva),
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function (result) {
			console.log(result);
		},
	});
}); */




