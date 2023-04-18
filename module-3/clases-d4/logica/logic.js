
const getInfo = ()=>{
    let from = $('#from').val()
    let to = $('#to').val()
    let dateFrom = $('#fromDate').val()
    let dateTo = $('#toDate').val()

    $('#originDate').text(dateFrom)
    $('#destDate').text(dateTo)
    $('#origin').text(from)
    $('#dest').text(to)

    if((from == 'Chicago' && to == 'Venice')||(from == 'Boston' && to == 'Paris')){
        $('#trans').text('Ojo!, tu vuelo tiene una escala')
    }else{
        $('#trans').text('Tu vuelo no tiene escala')
    }
}