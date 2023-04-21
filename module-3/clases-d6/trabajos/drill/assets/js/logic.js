
let kidsArray = [];

$('#buttonIn').click(function (event) {
    event.preventDefault()
    if (nameIn.value != '' && !kidsArray.includes(nameIn.value)) {
        kidsArray.push((nameIn.value))
        kids.innerText = kidsArray
        nameIn.value = ''
    } else {
        alert('Por favor ingrese un nombre valido')
        nameIn.value = ''
    }
})

$('#buttonOut').click(function (event) {
    event.preventDefault()
    if (nameOut.value != '' && kidsArray.indexOf(nameOut.value) != -1) {
            indexArray = kidsArray.indexOf(nameOut.value)
            kidsArray.splice(indexArray, 1)
            kids.innerText = kidsArray
            nameOut.value = ''
        } else {
            alert('Este nombre no esta en la lista')
            nameOut.value = ''
        }
})