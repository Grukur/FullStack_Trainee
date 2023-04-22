
$('#btnBudget').click(function (event) {
    event.preventDefault()
    let cash = saveBudget()
    showMoney(cash)
})


$('#btnExpend').click(function (event) {
    event.preventDefault()
    let expend = saveExpends()
    addListItems(expend)
    sumExpends()
})

$('#tBody').on('click', '.trash', function () {
    $(this).parent().parent().remove()
    let productName = $(this).parent().parent().text().split('\n')
    deleteItem(productName[1])

});

class Expends {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }
}

function saveBudget() {
    let budgetLock = $('#budget').val()
    if (!/[\D]/gm.test(budgetLock) && budgetLock != '') {
        let budget = parseInt(budgetLock)
        return budget
    } else {
        alert('Por favor ingrese un monto valido, sin puntos ni comas y solo numeros')
        $('#budget').val('')
        return
    }
}

const showMoney = (cash = 0) => {
    $('#cash').text(`$${cash}`)
    $('#finalCash').text(`$${cash}`)
    $('#sumExpend').text(`$${0}`)
    $('#loger').html('')
}

let expendArray = [];

const saveExpends = () => {
    let nameExpLock = $('#nameExpend').val();
    let amntExpLock = $('#amountExpend').val();
    if (!/[\D]/gm.test(amntExpLock) && amntExpLock != '' && nameExpLock != '') {
        let objExpend = new Expends(nameExpLock, amntExpLock);
        expendArray.push(objExpend)
        $('#amountExpend').val('') && $('#nameExpend').val('')
        return expendArray
    } else {
        alert('Por favor ingrese un producto junto a un monto valido sin puntos ni comas en los espacios indicados')
        $('#amountExpend').val('') && $('#nameExpend').val('')
        return
    }
}

const addListItems = () => {
    $('#tBody').html('')
    expendArray.forEach(item => {
        $('#tBody').append(`
            <tr>
                <td>${item.name}</td>
                <td>${item.amount}</td>
                <td><img class="trash" src="./assets/img/trashCan.jpg" width="15px"></td>
            </tr>
        `)
    })
}

const deleteItem = (product) => {
    expendArray.forEach(item => {
        if (item.name.includes(product)) {
            console.log('exito')
        } else {
            console.log('error')
        }
    })
}


const sumExpends = () => {
    let expendsTotal = [];
    let total;
    expendArray.forEach(item => {
        expendsTotal.push(item.amount)
        total = expendsTotal.reduce((a, b) => {
            return parseInt(a) + parseInt(b)
        })
    })
    let expendFinal = parseInt($('#sumExpend').text()) - parseInt(total)
    $('#sumExpend').text(expendFinal)
}

const subExpends = () => {

}

const sumAndSubtractFinal = () => {

}


/* cansado..... */


/* <td>Aceite Oliva</td>
                            <td>3750</td>
                            <td><button id="trash" class="border-0 bg-light"><img src="./assets/img/trashCan.jpg"
                                        width="15px"></button></td> */