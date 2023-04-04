$(document).ready(function(){
    //Dialog perk
    let dialogPerk = $('#dialog-perk').dialog({
        width: "auto",
        height: 'auto',
        modal: true,
        create: function( event, ui ) {
            // Set maxWidth
            $(this).css({"maxWidth": "1300px"});
        },
        fluid: true,
        autoOpen: false,    
        resizable: false
    });
    //Abrir perk
    $(document).on('click', 'button[id^="verMas-"]', function(){
        dialogPerk.dialog("open");
        console.log(dialogPerk.attr('title'));
    })
    
})