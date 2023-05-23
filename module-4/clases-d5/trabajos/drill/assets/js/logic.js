
$('#lens1').on({
    click: function () {
        limpiar();
        $("#caja1").addClass('bg-success');
        $("#caja1").children().css("color", 'darkgreen');
    },
})
$('#lens2').on({
    click: function () {
        limpiar();
        $("#caja2").addClass('bg-warning');
        $("#caja2").children().css("color", 'yellow');
    }

})
$('#lens3').on({
    click: function () {
        limpiar();
        $("#caja3").addClass('bg-primary');
        $("#caja3").children().css("color", 'blue');
    }

})
function limpiar() {
    $("#caja1").removeClass('bg-success').children().css("color", "#E35865");
    $("#caja2").removeClass('bg-warning').children().css("color", "#E35865");
    $("#caja3").removeClass('bg-primary').children().css("color", "#E35865");
}
