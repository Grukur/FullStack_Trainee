/* 
let num = 5.8
console.log(num)

let str = num.toString()
console.log(str)

let num2 = Number(str)
console.log(num2)

let num3 = parseInt(str)
console.log(num3)

let num4 = parseFloat(str)
console.log(num4)

$('#button').click(function () {
    $("#show").append(`
        <p>Nuestro numero es: ${num}</p>
        <p>Nuestro toString es: ${num}</p>
        <p>Nuestro Number es: ${num}</p>
        <p>Nuestro parseInt es: ${num}</p>
        <p>Nuestro parseFloat es: ${num}</p>
        `)
}) */

/* let date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
console.log(`${hour}:${minutes} hrs`)


let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
console.log(`${day}/${month}/${year}`) */

// Ejercicio edad

/* Fecha nacimiento */

/* let nacimiento = moment('1988-09-22');

let nacimientoDiv = document.getElementById('nacimiento');

nacimientoDiv.innerHTML = nacimiento.format('LL'); */

/* Calculo edad */

/* let edadDiv = document.getElementById('edad');

let edad = moment().diff(nacimiento, 'days');

edadDiv.innerHTML = edad; */

/* let inputUser = parseInt(prompt('por favor ingrese un numero'))
var mod = inputUser % 2 */
/* alert(mod)
if(inputUser % 2 === 0){    
    if(inputUser === 0){
        alert('su numero es 0')
        return
    }        
    alert('su numero es par')
}else{
    alert('su numero es inpar')    
} */

/* par inpar */
/* if(inputUser === 0) {

     alert("su número es 0")
    
    }else if (inputUser % 2 === 0){
    
     alert("su número es par")
    
    }else{
    
    alert("su número es impar")
    
    } */

/* diferencia entre 2 numeros */
/* let numero1 = parseInt(prompt('ingrese un numero'))
let numero2 = parseInt(prompt('ingrese un numero')) */

/* if(numero1===numero2){
    alert('son iguales')
}else if(numero1<numero2){
    alert(`${numero2} es mayor`)
}else{
    alert(numero1, ' es mayor')
} */

/* otra solucion */
/* let max = Math.max(numero1, numero2)
let min = Math.min(numero1, numero2) */

/* alert("Para calucular la difereccia entre dos número a continuación ingrese cada uno de ellos");

if (numero1 > numero2) {
alert("La diferencia es: " + (numero1 - numero2))

} else if (numero1 == numero2) {
alert("Los número son iguales")
}

else {
alert("La diferencia es: " + (numero2 - numero1))
} */
