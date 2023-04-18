
$('#buttonBg').click(function(){
    if($('#check').prop('checked') === true){
        console.log('primer')
        $('#code').toggleClass('d-none', 'd-block')
    }else{
        alert('Para obtener un codigo de descuento debe aceptar los términos y condiciones')
    }
})