$(document).ready(function(){
    //Diálogo ver más
    let dialogVerMas = $('#dialog-verMas').dialog({
        width: "50%",
        height: 'auto',
        modal: true,
        fluid: true,
        autoOpen: false,    
        resizable: false
    });


    //Abrir ver más
    $(document).on('click', 'button[id^="verMas-"]', function(){
        dialogVerMas.dialog("open");
        console.log(dialogVerMas.dialog({title: "Inversor"}));
    })
})