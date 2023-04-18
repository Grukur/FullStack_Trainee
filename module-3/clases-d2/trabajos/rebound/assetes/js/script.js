
// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerText;
    var screen = document.getElementById("screen").innerText;
    document.getElementById('screen').innerText = screen + key;
}

//Borra o limpia toda la pantalla.
function clearScreen() {
    var screen = document.getElementById("screen").innerText = "";
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").innerText;
    var screen = document.getElementById("screen").innerText = eval(screen);
}

$('button').click(function(){
    if(this.innerHTML == '='){
        solve()
    }else if(this.innerHTML == 'AC'){
        clearScreen()
    }else{
        getValue(this.id)
    }
})


