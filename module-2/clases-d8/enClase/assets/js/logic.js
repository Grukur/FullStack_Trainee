

let option = parseInt(prompt('Seleccione que desea hacer: \n1.- Calcular cual número es mayor\n2.- Sumar\n3.- Restar\n4.- Multiplicar\n5.- Dividir\n6.- Mostrar los números ingresados\n7.- Salir'));
console.log(option);


if (option < 7) {
    number1 = parseFloat(prompt('Por favor ingrese el primer número: '));
    console.log(number1);

    number2 = parseFloat(prompt('Por favor ingrese el segundo número: '));
    console.log(number2);
}

switch (option) {
    case 1:
        function esMayor(num1, num2) {
            if (num1 > num2) {
                alert(num1 + ' es mayor que ' + num2);
            }
            else if (num1 < num2) {
                alert(num2 + ' es mayor que ' + num1);
            }
            else {
                alert(num1 + ' y ' + num2 + ' son iguales');
            }
        }
        esMayor(number1, number2)
        break;

    case 2:
        function sumar(num1, num2) {
            alert('La suma de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 + num2));
        }
        sumar(number1, number2)
        break;

    case 3:
        function restar(num1, num2) {
            alert('La resta de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 - num2));
        }
        restar(number1, number2)
        break;

    case 4:
        function multi(num1, num2) {
            alert('La multiplicacion de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 * num2));
        }
        multi(number1, number2)
        break;

    case 5:
        function divir(num1, num2) {
            alert('La división de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 / num2));
        }
        divir(number1, number2)
        break;
    case 6:
        alert('Sus números son: ' + number1 + ' y ' + number2);
        break;
    case 7:
        alert('Gracias por participar');
        break;
    default:
        alert('Elección incorrecta');
        break;

}



