// Template
var template;

// Daten laden
function loadenTemplate(path, daten, fenster){
    var daten = daten;
    var fenster = fenster;

    $.ajax({
        url: path, // Pfad zu den Template
        cache: true,
        success: function(templateRaw)
        {
            // compilieren Template
            template  = Handlebars.compile(templateRaw);

            // Zuordnen Variablen und füllen Fenster
            $("#" + fenster).html(template(daten));
        }
    });
}