

function changeColor(event, color){
    event.style.color = color
    event.style.fontSize = '1.5em'
}

function colorDefault(event){
    event.style.color = 'black'
    event.style.fontSize = '1em'
}

function showHide(){
    document.getElementById('test2').style.display = 'block'
    document.getElementById('test2').style.fontSize = '1.2em'
    document.getElementById('test2').style.color = 'blue'    
}

function hide(event){
    event.style.display = 'none'
}

function textGrow(event, size){
    event.style.fontSize = size
    event.style.color = 'green'
}

function changing(event){
    event.style.backgroundColor = 'red'
}