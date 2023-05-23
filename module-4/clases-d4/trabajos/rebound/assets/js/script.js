
let contacts = [];

$('#btn').on('click', ()=>{
    showModal()
    saveData()
    console.log(contacts)
})

class contact {
    constructor(name, phone, email, note){
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.note = note;
    }
}

const showModal = ()=>{
    $('#modalInfo').text(`
    Nombre: ${$('#name').val()} ${$('#last').val()} Email: ${$('#email').val()} Tel: ${$('#phone').val()}
    `)
    $('#myModal').modal('show');
}

const saveData = ()=>{
    let newContact = new contact(($('#name').val()+' '+$('#last').val()), $('#phone').val(), $('#email').val(), $('#note').val())
    contacts.push(newContact)
}

