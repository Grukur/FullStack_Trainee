/* function isIsogram(str) {
    let arr = [];
    let str2 = str.toLowerCase()
    if (str != '') {
        for (i in str2) {
            if (arr.includes(str2[i])) {
                return false
            } else {
                arr.push(str2[i]);              
            }
        }
        console.log(arr, 'cumple')
    } else {
        console.log(true, 1)
        return true
    }
}


isIsogram('Dermatoglyphics') */

/* var uniqueInOrder=function(iterable){
    arr = []
    for (i in iterable){
        if (iterable[i] != iterable[i-1]){
            arr.push(iterable[i])
        }else{
            continue            
        }
    }
    console.log(arr)
    return arr
}

uniqueInOrder('ABBCcAD') */

/* const convertidor = (nota)=>{
    notaFinal = parseFloat(nota)

    if( 0 < notaFinal && notaFinal < 11){
        switch(true){

            case notaFinal < 4:
                console.log('reprobado')
                break;
            case 4 <= notaFinal && notaFinal <= 6:
                console.log('aprobado')
                break;
            case 7 <= notaFinal && notaFinal <= 8:
                console.log('notable')
                break;
            case 9 <= notaFinal && notaFinal <= 10:
                console.log('sobresaliente')
                break;
        }
    }else{
        console.log('Nota ingresada es invalida')
    }
}
convertidor('a') */


/* Mio */
/* let baseUsuarios = {
    'user': 1024,
    'pass': 4567,
    'grade': 'admin',
    'nombre': 'Antonio bla'
};

do {
    let userInput = parseInt(prompt
        ('por favor ingrese su numero de usurario o "q" para salir'))
    if (baseUsuarios.user == userInput) {
        let userPss = prompt('por favor ingrese su clave')
        if (baseUsuarios.pass == userPss) {
            alert(`Bienvenido ${baseUsuarios.grade} ${baseUsuarios.nombre}`)
            break;
        } else {
            alert('Password incorrecta')
            break;
        }
    } else {
        alert('Usurario incorrecto')
        break;
    }
} while (userInput != 'q')
alert('Adios') */


/* Ideal */
/* let cliente = {
    user: 1024,
    password: 4567,
    nombre: 'Talento Digital',
};

let userInput;
let passInput;
let opcion;

do {
    opcion = parseInt(
        prompt('Escoja la acción\n1.-Ingresar sus credenciales\n2.Salir')
    );

    switch (opcion) {
        case 1:
            userInput = parseInt(prompt('Ingrese su usuario'));
            passInput = parseInt(prompt('Ingrese su contraseña'));
            break;

        case 2:
            alert('Adios. Gracias por preferirnos.');
            break;
    }
} while (userInput !== cliente.user && passInput !== cliente.password);
alert('Pasó validación'); */

/* maleque */
/* while (true) {
    let codigo = prompt("Introduce tu código de usuario");
    let contrasena = prompt("Introduce tu contraseña numérica");

    if (codigo === "1024" && contrasena === "4567") {
        alert("¡Bienvenido!");
        break;

    } else if (codigo === "" || contrasena === "") {
        alert("Has cancelado el programa");
        break;

    } else {
        alert("Código o contraseña incorrectos, inténtalo de nuevo");
    }
} */



/* var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        console.log('resultado de la validacion', Fn.dv(rut))
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11; 
        console.log(S ? S - 1 : 'k')
        return S ? S - 1 : 'k';
    }
}

// Uso de la función
Fn.validaRut('17956954-1') ? 'Valido' : 'inválido'; */

const validarEdu = ()=>{
    if($('educacion').text != ''){
        console.log($('educacion').text)
    }else{
        console.log('error en educacion')
    }
}
const validarCondicion = ()=>{
    if($('condicion').text != ''){
        console.log($('condicion').text)
    }else{
        console.log('error en condicion')
    }
}

$('button').click(function(){
    console.log('entra')
    validarEdu()
    validarCondicion()


})