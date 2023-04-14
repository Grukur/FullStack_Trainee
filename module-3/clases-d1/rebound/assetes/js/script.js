/* data */
var time = moment().format('DD-MM-YYYY')
$('#insertDate').text(time)

var hora = moment().format('LT');
$('#insertTime').text(hora)

var flightNumber = Math.floor(Math.random() * 2000) + 100
$('#flightNumber').text(flightNumber)

var gateNumber = Math.floor(Math.random() * 100) + 5
$('#terminalNumber').text(gateNumber)

/* modal */

    $('body').append(`<div id='myModal' class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">        
        <div class="modal-body">
          <p>Pasajero, se le recuerda que para abordar el avion debe tener en mano su pasaporte y su boleto de embarque. Mantegnase atento a los avisos mediante esta plataforma.</p>
        </div>
        <div class="modal-footer">
          <button id='modalBtn' type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>`)

$('#myModal').modal('show')

$('#modalBtn').click(function(){
    $('#myModal').modal('hide')
})



