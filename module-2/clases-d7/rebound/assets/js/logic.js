
let numero1, numero2, resultado; 

numero1 = parseFloat(prompt('Por favor ingrese el primer numero: '));
console.log(numero1);

numero2 = parseFloat(prompt('Por favor ingrese el segundo numero: '));
console.log(numero2);

function validar (){
    if (numero1 > numero2) {
        alert(numero1 + ' es mayor que ' + numero2)
    }
    else if (numero1 < numero2) {
        alert(numero2 + ' es mayor que ' + numero1)
    }
    else {
        alert(numero1 + ' y ' + numero2 + ' son iguales')
    }
}

validar()