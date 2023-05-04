/* async basico */
/* async function consultarUsuario(nombre, password) {
    let usuario = { name: "Pedro", password: "qwerty" };
    let respuesta = "";
    if (usuario.name == nombre && usuario.password == password) {
        respuesta = "Usuario autenticado";
    } else {
        respuesta = "Las credenciales no son válidas.";
    }
    return respuesta;
}

let respuesta = consultarUsuario("Pedro", "qwertyy");
console.log(respuesta);

respuesta.then((respuesta) => console.log(respuesta));
console.log("Siguiente código."); */


/* usando ascyn con un fetch */
/* const obtenerPokemon = async (id) => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    try {
        let response = await fetch(url);
        let data = await response.json();
        let response2 = await fetch(data.species.url);
        let data2 = await response2.json();
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
 */
/* ejemplo sin async ni await */
/*  fetch(url) 
     .then((response) => response.json()) 
     .then((data) => { 
         fetch(data.species.url) 
             .then((response) => response.json()) 
             .then((data) => console.log(data)) 
             .catch(error => console.log(error)) 
     }) 
     .catch((error) => console.log(error)); */
/* }; */
/* const mostrarPokemon = (pokemon) => { 
    console.log(pokemon.name); 
}; */
/* obtenerPokemon(1);
console.log("continuando."); */


/* usando promesa */
/* function consultarUsuario(nombre, password) {
    return new Promise((resolve, reject) => {
        if (!nombre) return reject("No se ha enviado nombre.");
        if (!password) return reject("No se ha enviado password");
        let usuario = { name: "Pedro", password: "qwerty" };
        if (usuario.name == nombre && usuario.password == password) {
            return resolve("Usuario autenticado");
        } else {
            return reject("Las credenciales no son válidas.");
        }
    });
}

async function mostrar() {
    try {
        let respuesta = await consultarUsuario();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

mostrar(); */


/* fetch reutilizable mio */
const fetcher = async (id) => {
    return new Promise(async (resolve, reject) => {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + id
        try {
            let response = await fetch(url);
            let pokemon = await response.json();
            return resolve(pokemon);
        } catch (error) {
            reject("Se ha generado un error al procesar la petición");
        }
    });
};

const mostrarPokemon = async (id) => {
    try {
        let pokemon = await fetcher(id);
        console.log(pokemon.name);
    } catch (error) {
        console.log(error);
    }
};

mostrarPokemon(1);


/* profe */
/* const obtenerPokemon = (id) => {
    return new Promise(async (resolve, reject) => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + id;
        try {
            let response = await fetch(url);
            let pokemon = await response.json();
            return resolve(pokemon);
        } catch (error) {
            reject("Se ha generado un error al procesar la petición");
        }
    });
};

const mostrarPokemonModal = async (id) => {
    try {
        let pokemon = await obtenerPokemon(id);
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
    //RESTO DE INSTRUCCIONES PARA CARGAR DATOS EN UN MODAL
};

mostrarPokemonModal(1);
const mostrarPokemonTabla = async (id) => {
    try {
        let pokemon = await obtenerPokemon(id);
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
    //RESTO DE INSTRUCCIONES PARA CARGAR DATOS EN TABLA
};

mostrarPokemonTabla(1); */