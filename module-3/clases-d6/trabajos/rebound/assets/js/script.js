
let suma = [];
$('input').on('click', function () {
    /* actuamos sobre los input checked */
    if ($(this).prop('checked')) {
        /* definimos los hermanos a atacar */
        let titleSibling = $(this).siblings('h5')
        let priceSibling = $(this).siblings('h6')
        /* recopilamos los precios de cada item y lo limpiamos para poder tratarlos como numeros */
        suma.push(parseFloat(priceSibling.text().replace(/[$,.]/g, '')))
        /* sumamos los precios capturados en suma */
        let cashFinal = suma.reduce((a, b) => {return a + b})
        /* nos anclamos en el id cash y le entregamos la suma con formato de dinero */
        cash.innerText = (`$${cashFinal.toLocaleString()}`)

        /* insertamos el producto y precio en los id respectivos */
        document.getElementById('items').insertAdjacentHTML('afterbegin', `<li class="fw-bold mt-3">${titleSibling.text()}</li>`)
        document.getElementById('price').insertAdjacentHTML('afterbegin', `<li class="fw-bold mt-3">${priceSibling.text()}</li>`)

        /* no se pide eliminar productos al desmarcar */
    } else if (!$(this).prop('checked')) {
        console.log('out')
    }
})





