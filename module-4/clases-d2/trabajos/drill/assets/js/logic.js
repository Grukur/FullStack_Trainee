
$('#btn').click(function (event) {
    event.preventDefault()
    let semanas = parseInt($('#semanas').val())
    let dias = parseInt($('#dias').val())

    let cliente = clientIn(semanas, dias)
    activity(cliente.totalDias(), semanas, dias).next()
})

class WorkTime {
    constructor(semanas, dias) {
        this.semanas = semanas
        this.dias = dias
    }
    totalDias() {
        return (this.semanas * this.dias)
    }
}

const clientIn = (semanas, dias) => {
    let cliente = new WorkTime(semanas, dias)
    return cliente
}

function* activity(totalDias, semanas, dias) {
    let activitys = ['Correr', 'Sentadilla', 'Banco', 'Peso muerto', 'Prensa']
    let eActivity = activitys[Symbol.iterator]()

    console.log(`Semanas: ${semanas}\nDias: ${dias}\n`)
    for (let index = 1; index <= totalDias; index++) {
        /* let reiniciar = eActivity.next().done;
        if (reiniciar) {
            eActivity = arr[Symbol.iterator]();
        } else {
            Semanas: ${semanas}\nDias: ${dias}\n
        } */

        let iteracion = eActivity.next();
        if (iteracion.done) {
            eActivity = activitys[Symbol.iterator]();
            iteracion = eActivity.next();
            console.log(`Dia ${index}: ${iteracion.value}`);
        } else {
            console.log(`Dia ${index}: ${iteracion.value}`);
        }
    };
}



/* var arr = ["rutina 1", "rutina 2", "rutina 3", "rutina 4", "rutina 5"];
var eArr = arr[Symbol.iterator]();
let semanas = 4;
let dias = 3;

for (let index = 1; index <= 12; index++) { */
    //let reiniciar = eArr.next().done;
/*     if (reiniciar) {
    eArr = arr[Symbol.iterator]();
} else {
}*/

/*     let iteracion = eArr.next();
    if (iteracion.done) {
        eArr = arr[Symbol.iterator]();
        iteracion = eArr.next();
        console.log(iteracion.value);
    } else {
        console.log(iteracion.value);
    } */
    //console.log(`Día ${index}: Rutina: ${eArr.next().value}`);

