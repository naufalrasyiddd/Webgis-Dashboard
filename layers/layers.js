var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RiwayatProyekGeoarta_1 = new ol.format.GeoJSON();
var features_RiwayatProyekGeoarta_1 = format_RiwayatProyekGeoarta_1.readFeatures(json_RiwayatProyekGeoarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiwayatProyekGeoarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiwayatProyekGeoarta_1.addFeatures(features_RiwayatProyekGeoarta_1);
var lyr_RiwayatProyekGeoarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiwayatProyekGeoarta_1, 
                style: style_RiwayatProyekGeoarta_1,
                popuplayertitle: 'Riwayat Proyek Geoarta',
                interactive: true,
                title: '<img src="styles/legend/RiwayatProyekGeoarta_1.png" /> Riwayat Proyek Geoarta'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_RiwayatProyekGeoarta_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_RiwayatProyekGeoarta_1];
lyr_RiwayatProyekGeoarta_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'PopupInfo': 'PopupInfo', 'Photo': 'Photo', });
lyr_RiwayatProyekGeoarta_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'PopupInfo': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_RiwayatProyekGeoarta_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'PopupInfo': 'no label', 'Photo': 'no label', });
lyr_RiwayatProyekGeoarta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});