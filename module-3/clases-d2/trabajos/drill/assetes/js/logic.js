
const celsiusToFahrenheit = (temperature)=>{
    console.log(...temperature)
    if($('#bigC').text() == '°C'){
        $('#bigC').text('°F')
        $('#bigTemp').text((temperature *(9/5)+32).toFixed(0))
        $('#sun').text(($('#sun').text()*(9/5)+32).toFixed(0))
        $('#mon').text(($('#mon').text()*(9/5)+32).toFixed(0))
        $('#tue').text(($('#tue').text()*(9/5)+32).toFixed(0))
        $('#wed').text(($('#wed').text()*(9/5)+32).toFixed(0))
        $('#thu').text(($('#thu').text()*(9/5)+32).toFixed(0))
        $('#fri').text(($('#fri').text()*(9/5)+32).toFixed(0))
        $('#sat').text(($('#sat').text()*(9/5)+32).toFixed(0))
    }else{
        $('#bigC').text('°C')
        $('#bigTemp').text(((temperature -32) *(5/9)).toFixed(0))
        $('#sun').text((($('#sun').text() -32) *(5/9)).toFixed(0))
        $('#mon').text((($('#mon').text() -32) *(5/9)).toFixed(0))
        $('#tue').text((($('#tue').text() -32) *(5/9)).toFixed(0))
        $('#wed').text((($('#wed').text() -32) *(5/9)).toFixed(0))
        $('#thu').text((($('#thu').text() -32) *(5/9)).toFixed(0))
        $('#fri').text((($('#fri').text() -32) *(5/9)).toFixed(0))
        $('#sat').text((($('#sat').text() -32) *(5/9)).toFixed(0))
    }
}
const convert = ()=>{
    $('input').change(celsiusToFahrenheit($('#bigTemp').text()))
}


