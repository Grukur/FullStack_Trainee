
/* intersecciones entre 2 conjuntos */
let ropa = ['polera', 'pantalon', 'gorro', 'camisa', 'poleron', 'zapatos']
let productos = ['ferrari', 'pantalon', 'casa', 'camisa', 'helado', 'peluche']
let decoracion = ['zapatos', 'florero', 'pantalon', 'peluche', 'espejo', 'vaso']

let interRopaProduc = productos.filter((objeto => ropa.includes(objeto)))
console.log(interRopaProduc, 'interseccion entre ropa y productos')

let interDecoRopa = ropa.filter((objeto => decoracion.includes(objeto)))
console.log(interDecoRopa, 'interseccion entre decoracion y ropa')

let interDecoProduc = productos.filter((objeto => decoracion.includes(objeto)))
console.log(interDecoProduc, 'interseccion entre decoracion y productos')


/* como funcion */
const interseccionArrays = (conjuntoA, conjuntoB)=>{
    let result = conjuntoA.filter((objeto => conjuntoB.includes(objeto)))
    console.log(result, ` interseccion `)
}
interseccionArrays(ropa, productos)


/* intersecciones entre 3 o más conjuntos */
/* creamos una funcion */
function intersection(argument) {
    /* creamos una lista para los resultados que cumplan*/
    var result = [];
    /* creamos una lista para almacenar los conjuntos (listas)*/
    var lists;
    /* si solo pasamos un conjunto (lista), guardamos en index 0  */
    if (argument.length === 1) {
        lists = argument[0];
    } else {
        lists = argument;
    }
    /* iteramos en lists, consiguiendo cada conjunto (lista*/
    for (var i in lists) {
        var currentList = lists[i];
        /* obtenemos cada elemento de cada conjunto (lista) */
        for (var y in currentList) {
            var currentValue = currentList[y];
            /* buscamos en result si el elemento esta, si no está, continuamos */
            if (result.indexOf(currentValue) === -1) {
                /* buscamos en cada conjunto (lista) el elemento para ver donde no existe y al mismo tiempo descartamos conjuntos vacios de length 0 */                
                if (lists.filter(function (obj) {
                    return obj.indexOf(currentValue) == -1}).length == 0) 
                /* cuando el index es distinto de -1 en los conjuntos (existe en todos los conjuntos) y el length de los conjuntos es superior a 0 (tienen contenido), guarda el elemento en results */
                {                    
                result.push(currentValue);
                }
            }
        }
    }
    return result;
}
console.log(intersection([ropa, productos, decoracion]));

/* diferencia */

let unionPost = ropa.concat(decoracion)

let filtrado = unionPost.filter(function(numero){
    if(!ropa.includes(numero) || !decoracion.includes(numero)){
        return numero
    }
})

console.log(unionPost)

/* unionn */

let union = ropa.concat(productos)
console.log(union)



