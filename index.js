// Steuerung
$(document).ready(function(){

    $.ajax({
        method: 'post',
        url: 'index.php',
        cache: false,
        success: function(response){
            var daten = $.parseJSON(response);

            loadenTemplate('template1.html', daten, 'fenster1');
        }
    });
});