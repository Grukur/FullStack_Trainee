
productos =[{
    marca: 'Lenovo',
    modelo: 'xTreme',
    precio: '$3,990',
    imagen: './assets/img/laptop1.jfif'
},{
    marca: 'Dell',
    modelo: 'OverHaat',
    precio: '$990',
    imagen: './assets/img/laptop2.jfif'
}]


$('#cardButton').click(function(){
    console.log(productos[0].name)
    title.innerText = productos[0].marca + ' ' + productos[0].modelo
    price.innerText = productos[0].precio
    img.src = productos[0].imagen
})

$('#cardLink').click(function(event){
    event.preventDefault()
    console.log(productos[1].name)
    title.innerText = productos[1].marca + ' ' + productos[1].modelo
    price.innerText = productos[1].precio
    img.src = productos[1].imagen
})