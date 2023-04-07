
$(() => {

    let contenedorTextos = $('.textos');
    console.log(contenedorTextos)

    let style = $('#seleccionado1').css({ "background-color": "red", "font-size": '1.5em', 'color': 'blue', 'width': '50%' }).siblings().css({ "background-color": "blue", 'width': '50%', 'color': 'white' });
    console.log(style)

    $('.section1').find('li').css({'background-color': 'pink', 'width':'60%'})

    $('.section1 li').click(function(){
        $(this).css({"background-color": "red"}).siblings().css({'background-color': 'pink'})
        let texto = $(this).text()
    })

    
    $('body').click(function(){
        $(this).toggleClass('dark')
    })
})
