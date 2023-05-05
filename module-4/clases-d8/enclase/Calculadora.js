
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


const getPokemon = async(id)=>{
    let urlBase = 'https://pokeapi.co/api/v2/pokemon/';
    let response = await fetch(urlBase+id);
    let pokemon = await response.json();
    return pokemon;
};

/* let pokemon1 = getPokemon(5);
pokemon1.then((pokemon)=>{
    console.log(pokemon.name)
}) */

let pokemon1 = getPokemon(5);
let pokemon2 = getPokemon(10);
let pokemon3 = getPokemon(15);

let arrayPeticiones = [pokemon1, pokemon2, pokemon3];
Promise.race(arrayPeticiones).then((respuesta)=>{
    console.log(respuesta.name);
});
