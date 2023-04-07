
/* function show(){
    document.getElementById('text2').style.display = 'block'
}
function hide(){
    document.getElementById('text2').style.display = 'none'
}
function zoomIn(){
    document.getElementById('img').style.width = '100%'
}
function zoomOut(){
    document.getElementById('img').style.width = '20%'
}
function texto(){
    document.getElementById('text3').style.fontSize = '1.5em'
}
function textoReset(){
    document.getElementById('text3').style.fontSize = '1em'
}
 */
/* para agregar varios estilos en una fucniona usamos

event.styke.cssText = 'color: red; font-size:60px'*/

$(()=>{
    $('#text1').mouseover(function(){
        $('#text').fadeIn(1000).css('display', 'block')
    })
    $('#text1').mouseout(function(){
        $('#text').css('display', 'none')
    })
    $('#text2').click(function(){
        $(this).css({'width': '500%'})
    })
    $('#text2').mouseout(function(){
        $(this).css('width', '100%')
    })
    $('#text3').dblclick(function(){
        $(this).css('fontSize', '1.5em')
    })
    $('#text3').click(function(){
        $(this).css('fontSize', '1em')
    })
})