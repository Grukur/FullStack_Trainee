let datosUsuarios = [
    { nombre: "Pedro", password: "12345", nacimiento: '1990-01-01' },
    { nombre: "José", password: "qwerty", nacimiento: '1995-05-20' },
    { nombre: "Mauricio", password: "asdfg", nacimiento: '2000-11-20' },
    { nombre: "Jorge", password: "54321", nacimiento: '2011-01-01' },
];

/* let date = new Date

let arr = datosUsuarios.map(user => { if ((date - new Date(user.nacimiento)) / 1000 / 60 / 60 / 24 / 365 > 18) { return user.nombre } })

console.log(arr.filter(usuario => usuario != 'undefined')) */


/* const nombresUsuarios = datosUsuarios.map((usuario) => usuario.nombre);

let mayoresEdad = datosUsuarios.map((usuario) => {
    let edad = moment().diff(usuario.nacimiento, 'years');
    if (edad >= 18) {
        return usuario;
    }
});
console.log(mayoresEdad.filter((usuario) => usuario != undefined)); */

/* let arr = datosUsuarios.splice(1,2)

console.table(datosUsuarios)
console.table(arr) */


/* split y crear obj */
/* let texto = "Juan, Carlos, Pedro, María, Mariela";

let arrayNombres = texto.split(", ").map((usuario) => {
    let obj = { nombre: usuario, };
    return obj;
});

console.log(arrayNombres); */


/* replace */
/* let texto = 'Este texto habla sobre mascotas';
let result = texto.replace('sobre', 'acerca de')

console.log(texto)
console.log(result)
 */
/* replace all */
/* let texto2 = 'Este texto habla sobre mascotas y sobre animales';
let result2 = texto2.replaceAll('sobre', 'acerca de')

console.log(texto2)
console.log(result2) */


/* let texto = `
    <div class="container">
        <h1 id="titulo-principal">Titulo principal</h1>
        <h2 id="titulo-secundario">subtitulo</h2>
    </div>
    `;

texto = texto
            .replaceAll('-p', 'P')
            .replaceAll('-s', 'S');
console.log(texto) */


/* trim trimStart y trimEnd -> limpia los espacios */

/* startsWith -> verifica si comienza de una forma definida */



let ipsV4 = [
"192.168.10.25", "224.10.25.233",
"172.16.100.135", "128.255.10.230"
];


let arr = ipsV4.filter(num =>{if(
    num.startsWith('128.255') || 
    num.startsWith('192.0') || 
    num.startsWith('224.10') || 
    num.startsWith('240.0'))
    {return num}
})
console.log(arr)



