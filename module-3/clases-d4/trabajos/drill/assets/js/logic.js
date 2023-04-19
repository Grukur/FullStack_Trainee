
$('#button').click(function(event){
    event.preventDefault()
    if($('#check').prop('checked') && $('#email').val() != ''){
        alert('Felicitaciones! Pronto escucharás de nosotros')
    }else{
        alert('Parece que nos faltó algo...')
    }
})