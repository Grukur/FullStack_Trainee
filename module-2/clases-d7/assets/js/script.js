


edad = parseInt(prompt('Hola, favor indiqueme su edad: '))
id = (prompt('tiene su documento a mano? por favor conteste si o no'))

if (edad > 17 && id.toLowerCase() == 'si'){
    prompt(`Ya que ud tiene ${edad} años y tiene su documento a mano, que desea comprar?`)
}
else {
    alert(`venga en ${falta=(18-edad)} años más`)
}