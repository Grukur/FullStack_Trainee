
/* class Clientes {
    constructor(nombre, id, pass, cash) {
        this.nombre = nombre;
        this.id = id;
        this.pass = pass;
        this.cash = cash;

        function addCliente(nombre, id, pass, cash) {
            clientesBanco.push({ nombre: nombre, id: id, pass: pass, cash: cash });
        }
    }
} */

clientesBanco = [{ nombre: 'Antonio Lopez', id: '1', pass: 12, cash: 150000 },
{ nombre: 'Carlos Vivanco', id: '2', pass: 45, cash: 50000 },
{ nombre: 'Antonia Smith', id: '3', pass: 78, cash: 30000 }]

let inputMain = prompt('Por favor ingrese su id');
user = clientesBanco.find((us) => us.id == inputMain);

/* if (inputMain === ('ingresar')) {
    alert('entramos?')
    Clientes.addCliente(nombreCliente = prompt('nombre'), prompt('id'), prompt('pass'), parseInt(prompt('cash')))
    alert(clientesBanco.values + ' error?')
} */

if (inputMain === user.id) {
    let passMain = prompt('Por favor ingrese su clave: ')
    if (passMain == user.pass) {

        var option; /* tuve que difinir var para que fuese global, let no cumple con esta condicion */

        while (option != 4) {
            option = parseInt(prompt(`Bienvenido ${user.nombre}, por favor seleccione que desea hacer: \n1.- Conocer su saldo\n2.- Girar dinero\n3.- Depositar en su cuenta\n4.- Salir`));

            switch (option) {
                case 1:
                    alert(`${user.nombre}, su saldo es de:  ${user.cash}`);
                    break
                case 2:
                    function giros() {
                        withdraw = parseFloat(prompt(`Su saldo actual es: ${user.cash}\nPor favor ingrese el monto que desea girar: `))
                        if (withdraw > user.cash) {
                            alert(`Lo siento ${user.nombre}, solo posee ${user.cash}`);
                        }
                        else if (withdraw <= user.cash) {
                            alert(`${user.nombre}, ahora su saldo es de: ${user.cash = user.cash - withdraw}`);
                        }
                    }
                    giros()
                    break;
                case 3:
                    function deposito() {
                        deposit = parseFloat(prompt(`Su saldo actual es: ${user.cash}\nPor favor indique el monto que desea depositar: `))
                        alert(`${user.nombre}, su nuevo saldo es: ${user.cash = deposit + user.cash}`);
                    }
                    deposito()
                    break;
                case 4:
                    alert('Gracias por usar Banco en Linea 1.0');
                    break;
                default:
                    alert('Elección incorrecta');
                    break;
                }
            }
        }
        else {
            alert(`Clave Incorrecta`)
        }
    }
    else{
        alert('ops')
    }
    
    




