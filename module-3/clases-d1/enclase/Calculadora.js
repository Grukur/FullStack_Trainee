
while (option != 5) {
    var option = parseInt(prompt('Seleccione que desea hacer: \n1.- Sumar\n2.- Restar\n3.- Multiplicar\n4.- Dividir\n5.- Salir'));

    if (option < 5) {
        number1 = parseFloat(prompt('Por favor ingrese el primer número: '));
        number2 = parseFloat(prompt('Por favor ingrese el segundo número: '));
        if (isNaN(number1) | isNaN(number2)) {
            alert('ingresaste string')
            break;
        }
    }
    switch (option) {
        case 1:
            function sumar(num1, num2) {
                alert('La suma de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 + num2));
            }
            sumar(number1, number2)
            break;

        case 2:
            function restar(num1, num2) {
                alert('La resta de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 - num2));
            }
            restar(number1, number2)
            break;

        case 3:
            function multi(num1, num2) {
                alert('La multiplicacion de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 * num2));
            }
            multi(number1, number2)
            break;

        case 4:
            function divir(num1, num2) {
                if (num1 != 0 & num2 != 0)
                    alert('La división de sus números ' + num1 + ' y ' + num2 + ' es: ' + (num1 / num2));
                else
                    alert('No podemos dvidir por 0')
            }
            divir(number1, number2)
            break;
        case 5:
            alert('Gracias por participar');
            break;
        default:
            alert('Elección incorrecta');
            break;
    }
} 