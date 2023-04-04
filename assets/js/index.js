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
})