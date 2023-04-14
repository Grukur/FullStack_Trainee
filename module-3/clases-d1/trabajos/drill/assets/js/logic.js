

const date = () => {
    let date = moment().format('DD/MM/YYYY')
    return date
}


$('#card').append(
    `<div class="card m-auto" style="width:25rem">
        <div class="card-header fs-3 fw-bold">
        !Apresúrese!
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><p class='fs-4'>El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:</p></li>
        <li class="list-group-item fs-4 fw-bold">${date()}</li>
        <li class="list-group-item">
            <form>
                <fieldset disabled>                    
                    <div class="mb-3">
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Usuario">
                    </div>

                    <div class="mb-3">
                    <input type="email" id="disabledTextInput" class="form-control" placeholder="Correo">
                    </div>
                    
                    <div class="mb-3">
                    <input type="password" id="disabledTextInput" class="form-control" placeholder="Contraseña">
                    </div>                
                    
                    <button type="submit" class="btn btn-primary w-100">INSCRIBIRSE</button>

                    <p class='mt-2'>Tiene una cuenta? <a href="./carpetaX/paginaX.html">Inicie sesión aquí</a></p>
                </fieldset>
            </form>
        </li>
        </ul>
        </div>`
)


