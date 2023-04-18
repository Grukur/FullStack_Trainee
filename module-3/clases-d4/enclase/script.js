//Función Constructura en JS ES6
function Cliente (nombre, rut, clave, saldo) {
    this.nombre = nombre;
    this.rut = rut;
    this.clave = clave;
    this.saldo = saldo;
}

let cliente1 = new Cliente("Alfredo", "12345678-9", 1234, 1000);
let cliente2 = new Cliente("Jorge", "12345678", 4567, 1000); 
let cliente3 = new Cliente("Jazmin", "1234567", 7894, 1000);


let clientes = [cliente1, cliente2, cliente3];

alert("Bienvenido a nuestra Banca en Línea");
let rut = prompt("Por favor ingrese su rut");
let clave = prompt("Por favor ingrese su clave");

let ingreso = false;
let usuario;

for(let i = 0; i < clientes.length; i++) {
    if (clientes[i].rut == rut && clientes[i].clave == clave) {
        usuario = clientes[i]
        alert(`Bienvenido a nuestro Banco JS ${usuario.nombre}`) // "Bienvenido a nuestro Banco JS" + usuario.nombre
        ingreso = true
    }
}

function menu(usuario) {
    let opcion;

    do {

        opcion = parseInt(prompt("Seleccione una operación a realizar: \n 1.- Ver Saldo \n 2.- Realizar giro \n 3.- Realizar Deposito \n 4.- Salir"))

        switch (opcion){
            case 1:
                alert(`Su saldo es : ${usuario.saldo}`);
                break;
            case 2:
                let giro = parseInt(prompt("Por favor indique el monto a girar")
                    );
                
                if (giro > usuario.saldo) {
                    alert("Ups, saldo insuficiente, por favor prueba con otro monto")
                }else {
                    let saldo = usuario.saldo - giro;
                    usuario.saldo = saldo;
                    alert(`Felicidades, el giro fue hecho con exito. Su saldo actual es de ${usuario.saldo}`)
                };
                break;
            case 3:
                let deposito = parseInt(prompt("Por favor indique el monto a depositar")
                );

                let saldo = usuario.saldo + deposito
                usuario.saldo = saldo
                alert(`Felicidades, el deposito fue realizado con exito. Su saldo actual es de ${usuario.saldo}`)
                break;
            case  4:
                alert("Gracias por preferirnos");
                break;
            default:
                alert("Por favor inggrese una opción valida");
                break;

        }
        
    } while (opcion != 4);
}

if (ingreso == true) {
    menu(usuario);
} else {
    alert ("Lo sentimos, no pudimos validar los datos ingresados")
}