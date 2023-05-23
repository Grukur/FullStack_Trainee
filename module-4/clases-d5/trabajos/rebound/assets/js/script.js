
const blue = () => {
    $('#discount').toggleClass('blues')
}

const green = () => {
    $('#discount').toggleClass('greens')

}

const oneClick = () => {
    $('#btn').removeClass('bg-danger')
    $('#btn').addClass('oneClicks')
    $('#btn').text('Estas Seguro?')
}

const twoClick = () => {
    $('#btn').removeClass('oneClicks' && 'bg-danger')
    $('#btn').toggleClass('twoClicks')
    $('#btn').text('OK!')
}

const leave = () => {
    console.log('hola')
    $('#btn').removeClass('oneClicks' && 'bg-danger' && 'twoClicks')
    $('#btn').addClass('leaves')
    $('#btn').text('Comprado!')

}