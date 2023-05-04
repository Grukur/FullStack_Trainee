/*  */
/* const saludar = (nombre = 'User', mensaje = 'Como estas?') => {
    return `Hola ${nombre} ${mensaje}`
}

saludar(undefined, 'Registrate') */

/* operador Rest */
/* const calcular = (comando, ...numeros) => {
    if (comando == 'sumar') {
        return numeros.reduce((a, b) => a + b);
    } else if (comando == 'restar') {
        return numeros.reduce((a, b) => a - b);
    }
}

let resultado = calcular('restar', 2, 3, 4, 5, 6, 7, 8)
console.log(resultado) */

/* ejercicio de sort */
/* const operador = (comando, ...numeros)=>{
    switch(comando){
        case 'sumar' || 1:
            console.log(numeros.reduce((a,b)=>a+b))
            break            
        case 'ordenar' || 2:
            console.log(numeros.sort())
            break
        case 'abc' || 3:
            console.log(numeros.sort())
            break
        default:
            console.log('ingresa una opcion valida la proxima vez')
            break
    }
}
operador('ordenar', 4,8,6,1,7,3) */
/* 
'sumar', 4,8,6,1,7,3
'ordenar', 4,8,6,1,7,3
'abc', 'j','r','d','s'
*/

/* function operations(operation = 'asd', ...numbers) {
    if (operation === 'sumar') {
        return numbers.reduce((a, b) => a + b, 0)
    } else if (operation === 'order') {
        return numbers.sort((a, b) => a - b)
    } else if (operation === 'orderString') {
        return numbers.sort((a, b) => a - b)
    } else {
        return numbers
    }
} */

/* let numeros = [10, 20, 5, 6, 10];
let string = "Hola";

let objeto = {
    nombre: "Carlos",
    apellido: "Soto",
    edad: 25,
};

let arrObjeto = Object.entries(objeto);
console.log(arrObjeto);

for (const element of arrObjeto) {
    console.log(element[0] + " - " + element[1]);
}
 */
/* for (const key in objeto) {
    console.log(objeto[key]);
} */

/* session 4 */

/* destructuring */
/* const [uno, dos] = [5,8,7,1,9]

let arrNombres = ['Catalina', 'Maria', 'Pedro']

let [user1, user2] = arrNombres;

console.log(user1)
console.log(user1, user2) */

/* let objeto = {
    nombre: 'Pedro',
    edad: 38,
    correo: 'pedro@mail.com',
    roles: ['editor', 'admin']
}

let {nombre, correo} = objeto;
console.log(nombre, correo) */

/* spread se puede usar concat tambien*/
/* const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arrAll = [...arr1, ...arr2]
console.log(arrAll)

const arrConcat = arr1.concat(arr2) // mucho mas eficiente como codigo
console.log(arrConcat)  */

/* usando destructuring, spread y rest */
/* let rockies = [];
let champs = [];
let arrAll = [];
let url = 'https://digimon-api.vercel.app/api/digimon/'
fetch(url)
        .then(info => info.json())
        .then(lista => {

            for (const digimon of lista) {
                //aplicamos destructuring
                const {name, level} = digimon
                if(level == 'Rookie'){  
                    rockies.push({name, level})
                }else if(level == 'Champion'){
                    champs.push({name, level})
                }

                printer(...lista)
            }              
            //aplicamos spread
            arrAll = [...champs, ...rockies]

            console.log(arrAll)  

        })
        
        //aplicando rest
        const printer = (...digimons)=>{
            console.log(digimons)
        } */

const personas = [
    { nombre: "John", sueldo: 2000 },
    { nombre: "Mary", sueldo: 1500 },
    { nombre: "Bob", sueldo: 2500 },
    { nombre: "Alice", sueldo: 1800 },
    { nombre: "John", sueldo: 2200 },
    { nombre: "Mary", sueldo: 1700 },
    { nombre: "Bob", sueldo: 3000 },
    { nombre: "Alice", sueldo: 2000 },
    { nombre: "David", sueldo: 1900 },
    { nombre: "John", sueldo: 2400 },
];


/* let nombres = []
let cash = []
personas.forEach(item => {
    if (!nombres.includes(item.nombre)) {
        nombres.push(item.nombre, item.sueldo)
    }
}) */

/* Alexis */
/* personas.forEach(persona =>{
    if(!nombres[persona.nombre]){
        nombres[persona.nombre] = persona.sueldo;
    }else{
        nombres[persona.nombre] += persona.sueldo;
    }
})
console.log(nombres['John']) */

/* kevin */
//Nombres unicos
/* let personas2 = [];

personas.forEach((persona) => {
    personas2.push(persona.nombre);
});
let setPersonas = new Set(personas2);

//Sueldos unicos
let sueldosUnicos = [];
setPersonas.forEach(nombre => {
    let sueldoPersona = personas.filter(persona => persona.nombre === nombre);
    let sueldoTotal = sueldoPersona.reduce((total, persona) => total + persona.sueldo, 0);
    sueldosUnicos.push({ nombre, sueldo: sueldoTotal });
}); */

/* mairym */
/* console.log(sueldosUnicos);
const sumSueldos = personas.reduce((sumatoria, persona) => {
    const viejaInfoDePersona = sumatoria[persona.nombre]
    const nuevaInfoDePersona = viejaInfoDePersona
        ? { ...viejaInfoDePersona, sueldo: viejaInfoDePersona.sueldo + persona.sueldo }
        : { ...persona }
    return { ...sumatoria, [nuevaInfoDePersona.nombre]: nuevaInfoDePersona }
}, {})
console.log(Object.values(sumSueldos)) */
