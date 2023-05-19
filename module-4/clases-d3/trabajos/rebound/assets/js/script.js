

/* contador de productos seleccionados */
let bIngridients = [];
let counter =0;

/* actua sobre cada seleccion de checkbox (ingredientes) */
$('input').on('click', function () {
    /* actuamos sobre los input checked */
    if ($(this).prop('checked')) {
        counter++
        bIngridients.push(this.value)
        if(bIngridients.length>3){
            let sum = (counter-3)*800
            $('#extraCash').text(`$${sum}`)
            $('#bIngridients').text(`${bIngridients} `)
            $('#eIngridients').text(`${bIngridients.slice(3)} `)
        }else{
            $('#bIngridients').text(`${bIngridients} `)
        }
    /* al eliminar productos al desmarcar */
    } else if (!$(this).prop('checked')) {
        counter--
        bIngridients = bIngridients.filter(ing => ing != this.value)
        if(bIngridients.length>=3){
            let sum = (counter-3)*800
            $('#extraCash').text(`$${sum}`)  
            $('#bIngridients').text(`${bIngridients} `)    
            $('#eIngridients').text(`${bIngridients.slice(3)} `)      
        }else{
            $('#eIngridients').text(``)
            $('#bIngridients').text(`${bIngridients} `)  
        }
    }
})

const keyPress = ()=>{
    $('#tip').text(`$${$('#tipInput').val()}`)
}

$('button').on('click', function(){
    if($('#tipInput').val() >0){
        alert(`Su propina de $${$('#tipInput').val()} ha sido enviada`)
    }else{
        alert(`Aún no ha definido una propina`)
    }
})





