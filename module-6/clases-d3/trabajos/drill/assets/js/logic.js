
const celsiusToFahrenheit = (temperature = 1)=>{
    var nowTemp = (temperature -32) *(5/9)
    bigFtemp = ($('#bigTemp').text() -32) *(5/9)
    console.log(bigFtemp)
    $('#bigTemp').text(bigFtemp)

    return(nowTemp)
}

const convert = (algo)=>{
    if($('input').prop('checked') == true){
        celsiusToFahrenheit()
    }else{
        console.log('chao')
    }
}

if(true || true){
    console.log('and')
}