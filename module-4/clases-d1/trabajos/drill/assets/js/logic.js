/* Guardamos el dropdown */
let selected
$('.dropdown-item').on('click', (data)=>{
    selected = data.currentTarget.text
})

/* Creeaos nuestro alert con toda la info */
$('#btn').on('click', ()=>{
    alert(`De: ${$('#name').val()} ${$('#last').val()} ${$('#email').val()} \n
            ASUNTO: ${selected}\n
            MENSAJE:\n
            ${$('#message').val()}`)
})