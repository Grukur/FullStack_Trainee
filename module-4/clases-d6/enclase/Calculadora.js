<body> 
    <h1 id="mostrarContador">0</h1>
    <h1 id="mensaje" style="display:none;">Temporizador ha finalizado.</h1> 
    <input type="number" value="0" id="temporizador" required> 
    <button onclick="iniciar()" style="background-color: green;">Iniciar</button> 
    <button onclick="cancelar()" style="background-color: red;">Cancelar</button> 
    <button onclick="reanudar()" style="background-color: yellow;">Reanudar</button> 
    <button onclick="pausar()" style="background-color: skyblue">Pausar</button> 
    
    <script> let contador = 0; let intervalo; let contenedorContador = document.getElementById("mostrarContador"); let mensaje = document.getElementById("mensaje"); let sonido = new Audio("./alarm-loud.mp3"); const actualizarContador = () => {contenedorContador.innerText = contador; if (contador < 0) {cancelar(); mensaje.style.display = "block" emitirSondo() } contador--; } const iniciar = () => {mensaje.style.display = "none" let valor = parseInt(temporizador.value); contenedorContador.innerText = valor; contador = valor; intervalo = setInterval(actualizarContador, 1000) } const pausar = () => {clearInterval(intervalo); } const cancelar = () => {contenedorContador.innerText = 0; sonido.pause(); pausar(); } const reanudar = () => {intervalo = setInterval(actualizarContador, 1000)} const emitirSondo = () => {sonido.play() setTimeout(() => {sonido.pause(); }, 2000) } </script></body>