'use strict';

// KLARE EMPFEHLUNG: KEINE Addins mehr benutzen. Erstens sie verlieren ihren Support, werden durch die Community fast
// nicht mehr supportet und ebenfalls sind sie extrem kompliziert zu implementieren mit zusätzlich extrem vielen
// Fehlerquellen die oftmals das Design zerstören.


// Warte, bis die SharePoint-Bibliothek "sp.js" geladen ist, bevor die Seite initialisiert wird
ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

// Initialisiere die Seite
function initializePage() {
    // Warte, bis das DOM vollständig geladen ist
    $(document).ready(function () {
        // Rufe die SharePoint-Daten ab
        getUserInfo();
        getListItems();
    });
}

// Rufe Benutzerinformationen aus SharePoint ab und zeige sie an
function getUserInfo() {
    // Erstelle den Kontext für die aktuelle SharePoint-Webseite
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();
    context.load(user);

    // Führe die Abfrage aus
    context.executeQueryAsync(function () {
        // Benutzerinformationen erfolgreich abgerufen
        var userName = user.get_title();
        var userEmail = user.get_email();
        var userInfoHtml = '<p><strong>Name:</strong> ' + userName + '</p>';
        userInfoHtml += '<p><strong>Email:</strong> ' + userEmail + '</p>';

        // Setze den HTML-Output in das entsprechende div-Element
        $('#userInfo').html(userInfoHtml);
    }, function (sender, args) {
        // Fehler beim Abrufen der Benutzerinformationen
        $('#userInfo').html('<p>Fehler beim Abrufen der Benutzerinformationen: ' + args.get_message() + '</p>');
    });
}

// Rufe Listeneinträge aus einer SharePoint-Liste ab und zeige sie an
function getListItems() {
    // Erstelle den Kontext für die aktuelle SharePoint-Webseite
    var context = SP.ClientContext.get_current();
    var list = context.get_web().get_lists().getByTitle('Tasks'); // Ersetze 'Tasks' durch den Namen deiner Liste
    var camlQuery = new SP.CamlQuery();
    var items = list.getItems(camlQuery);
    context.load(items);

    // Führe die Abfrage aus
    context.executeQueryAsync(function () {
        var listItemsHtml = '<ul>';
        var listEnumerator = items.getEnumerator();

        // Durchlaufe die Listeneinträge und generiere HTML-Output
        while (listEnumerator.moveNext()) {
            var listItem = listEnumerator.get_current();
            var title = listItem.get_item('Title'); // Ersetze 'Title' durch den Namen deiner Spalte
            listItemsHtml += '<li>' + title + '</li>';
        }
        listItemsHtml += '</ul>';

        // Setze den HTML-Output in das entsprechende div-Element
        $('#listItems').html(listItemsHtml);
    }, function (sender, args) {
        // Fehler beim Abrufen der Listeneinträge
        $('#listItems').html('<p>Fehler beim Abrufen der Listeneinträge: ' + args.get_message() + '</p>');
    });
}
