ej.base.L10n.load({
    'de-DE': {
        'grid': {
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            'GroupDropArea': 'Ziehen Sie einen Spaltenkopf hier, um die Gruppe ihre Spalte',
            'UnGroup': 'Klicken Sie hier, um die Gruppierung aufheben',
            'EmptyDataSourceError': 'DataSource darf bei der Erstauslastung nicht leer sein, da Spalten aus der dataSource im AutoGenerate Spaltenraster',
            'Item': 'Artikel',
            'Items': 'Artikel'
        },
        'pager': {
            'currentPageInfo': '{0} von {1} Seiten',
            'totalItemsInfo': '({0} Beiträge)',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'nextPagerTooltip': 'Zum nächsten Pager',
            'previousPagerTooltip': 'Zum vorherigen Pager'
        }
    }
});
ej.base.setCulture('de-DE');
//var json = require(['./ca-gregorian.json']);
//debugger;
//require(['json!ca-gregorian.json'], function (data) {
//    debugger;
//});
//require(['https://ej2.syncfusion.com/16.1.24/javascript/demos/src/common/cldr-data/main/de/ca-gregorian.json'], function (data) {
//    debugger;
//});
loadCultureFiles('de');
function loadCultureFiles(name) {
    var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
    var loader = ej.base.loadCldr;
    var loadCulture = function (prop) {
        var val, ajax;
        ajax = new ej.base.Ajax('ca-gregorian.json', 'GET', true);

        ajax.onSuccess = function (value) {
            val = value;
        };
        ajax.send().then(function (e) { debugger; });
        loader(JSON.parse(val));
    };
    loadCulture(0);
}