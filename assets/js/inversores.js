$(document).ready(function(){
    //Ocultamos checkboxes
    let checkboxes = $('div[id^="checkBoxes"]');
    checkboxes.hide();
    
    //Función para mostrar los checkboxes segun el usuario decida
    function mostrarCheckboxes(grupo) {
        let checkboxesSector = $("#checkBoxes-" + grupo);
        let show = false;
        if (show) {
            checkboxesSector.hide();
            show = false;
        } else {
            checkboxesSector.show();
            show = true;
        }
    }

    $('.selectBox-sectores').click(function(){
        mostrarCheckboxes('sectores');
    })

    //Slider range
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
})