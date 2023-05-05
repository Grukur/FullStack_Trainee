/* mejorar validacion del checkbox.... */
$('#signSign').click(() => {
    $('#signForm').toggleClass('d-block')
    $('#vipForm').toggleClass('d-block')
})
$('#vipSign').click(() => {
    $('#signForm').toggleClass('d-none')
    $('#vipForm').toggleClass('d-none')
})
$('#signVip').click(() => {
    $('#signForm').toggleClass('d-none')
    $('#vipForm').toggleClass('d-none')
})
$('#vipVip').click(() => {
    $('#signForm').toggleClass('d-block')
    $('#vipForm').toggleClass('d-block')
})

let mortalUsers = [];
let vipUsers = [];
class Cuentas {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    mostrarInfo() {
        if (validador > 0) {
            $('#modalTitle').text(`Bienvenido ${this.name}`)
            $('#modalBody').text(`Nombre: ${this.name} Email: ${this.email} Contraseña ${this.pass}`)
            $('#myModal').modal('show')
        } else {
            alert('Por favor acepter los terminos y condiciones')
        }
    }
};

const validaCheckBox = () => {
    if (checkSign.checked == true || checkVip.checked == true) {

    } else if (checkSign.checked != true || checkVip.checked != true) {
        
    }
}

class Vip extends Cuentas {
    constructor(name, email, pass) {
        super(name, email, pass)
    }

    mostrarInfo() {
        if (validador > 0) {
            $('#modalTitle').text(`Bienvenido ${this.name}`)
            $('#modalBody').text(`Nombre: ${this.name} Email: ${this.email} Contraseña ${this.pass}`)
            $('#myModal').modal('show')
        } else {
            alert('Por favor acepter los terminos y condiciones')
        }
    }
};

$('#btnSign').click((event) => {
    event.preventDefault()
    let email = $('#emailSign').val()
    let pass = $('#passSign').val()
    let nameId = email.split('@')
    let id = Math.floor(Math.random() * 500)
    let name = nameId[0] + id
    let user = new Cuentas(name, email, pass)
    mortalUsers.push(user)
    user.mostrarInfo()
    validador = 0
});

$('#btnVip').click((event) => {
    event.preventDefault()
    let name = $('#nameVip').val()
    let email = $('#emailVip').val()
    let pass = $('#passVip').val()
    let user = new Vip(name, email, pass)
    vipUsers.push(user)
    user.mostrarInfo()
    validador = 0
});

