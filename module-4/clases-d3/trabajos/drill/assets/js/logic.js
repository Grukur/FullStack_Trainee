
$('button').on('click', (event)=>{
    event.preventDefault();
    console.log(`
    Para: ${$('#for').val()}\n
    Titulo: ${$('#title').val()}\n
    Mensaje: ${$('#msg').val()}\n
    From: ${$('#remitent').val()}\n                
    `)
    let copys = copies(email_1.value, email_2.value, 
                        email_3.value, email_4.value, 
                        email_5.value, email_6.value)
})

const copies = (...copys)=>{
    for(let i of copys ){
        if(!i == ''){
            console.log(i)
        }
    }
}