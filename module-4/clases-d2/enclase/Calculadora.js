
class Montos {
    static neto(monto){
        let neto = monto/1.19
        let iva = neto*.19
        return {neto:Math.ceil(neto), iva:Math.ceil(iva),monto}
    }
    static bruto(monto){
        let bruto = monto*1.19
        let iva = monto*.19
        return {bruto:Math.ceil(bruto), iva:Math.ceil(iva), monto}
    }
}

let precioProducto = 200000

console.log(Montos.bruto(precioProducto))