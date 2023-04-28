$('#btn').click(function(event){
    event.preventDefault()
    show()
})

class Prestamos{
    constructor(monto, interes, cuotas, id){
        this.monto = parseInt(monto)
        this.interes = parseInt(interes)
        this.cuotas = parseInt(cuotas)
        this.id = id
    }
    calcularValorPagar = () =>{
        console.log(this.monto)
        console.log(this.cuotas)
        console.log(this.interes)
        return (`$${((this.monto/this.cuotas)*(1 + (this.interes/100))).toLocaleString()}`)
    }
}

const show = ()=>{
    let prestamos = new Prestamos($('#monto').val(), $('#interes').val(), $('#cuotas').val())
    $('#final').text(`NO TE PREOCUPES! PUEDES PAGARLO EN ${prestamos.cuotas} CUOTAS DE ${prestamos.calcularValorPagar()}`)
}


