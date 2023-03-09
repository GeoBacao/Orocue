var wms_layers = [];

var format_reasaprovechables_0 = new ol.format.GeoJSON();
var features_reasaprovechables_0 = format_reasaprovechables_0.readFeatures(json_reasaprovechables_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasaprovechables_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasaprovechables_0.addFeatures(features_reasaprovechables_0);
var lyr_reasaprovechables_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasaprovechables_0, 
                style: style_reasaprovechables_0,
                interactive: true,
    title: 'Áreas aprovechables<br />\
    <img src="styles/legend/reasaprovechables_0_0.png" /> Habitat Modificado<br />\
    <img src="styles/legend/reasaprovechables_0_1.png" /> Habitat Natural<br />'
        });
var format_CoberturasCLC_1 = new ol.format.GeoJSON();
var features_CoberturasCLC_1 = format_CoberturasCLC_1.readFeatures(json_CoberturasCLC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturasCLC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturasCLC_1.addFeatures(features_CoberturasCLC_1);
var lyr_CoberturasCLC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturasCLC_1, 
                style: style_CoberturasCLC_1,
                interactive: true,
    title: 'Coberturas (CLC)<br />\
    <img src="styles/legend/CoberturasCLC_1_0.png" /> Bosque de Galeria y Ripario<br />\
    <img src="styles/legend/CoberturasCLC_1_1.png" /> Bosque Denso Alto Inundable Heterogeneo<br />\
    <img src="styles/legend/CoberturasCLC_1_2.png" /> Cuerpos de Agua Artificiales<br />\
    <img src="styles/legend/CoberturasCLC_1_3.png" /> Herbazal Denso de Tierra Firme Arbolado<br />\
    <img src="styles/legend/CoberturasCLC_1_4.png" /> Herbazal Denso de Tierra Firme con Arbustos<br />\
    <img src="styles/legend/CoberturasCLC_1_5.png" /> Herbazal Denso de Tierra Firme no Arbolado<br />\
    <img src="styles/legend/CoberturasCLC_1_6.png" /> Herbazal Denso Inundable Arbolado<br />\
    <img src="styles/legend/CoberturasCLC_1_7.png" /> Herbazal Denso Inundable no Arbolado<br />\
    <img src="styles/legend/CoberturasCLC_1_8.png" /> Lagunas, Lagos y Cienagas Naturales<br />\
    <img src="styles/legend/CoberturasCLC_1_9.png" /> Palmares<br />\
    <img src="styles/legend/CoberturasCLC_1_10.png" /> Pastos Arbolados<br />\
    <img src="styles/legend/CoberturasCLC_1_11.png" /> Pastos Enmalezados<br />\
    <img src="styles/legend/CoberturasCLC_1_12.png" /> Pastos Limpios<br />\
    <img src="styles/legend/CoberturasCLC_1_13.png" /> Red Vial y Territorios Asociados<br />\
    <img src="styles/legend/CoberturasCLC_1_14.png" /> Rios<br />\
    <img src="styles/legend/CoberturasCLC_1_15.png" /> Tejido urbano Discontinuo<br />\
    <img src="styles/legend/CoberturasCLC_1_16.png" /> Tierras Desnudas y Degradadas<br />\
    <img src="styles/legend/CoberturasCLC_1_17.png" /> Vegetacion Secundaria Alta<br />\
    <img src="styles/legend/CoberturasCLC_1_18.png" /> Vegetacion Secundaria Baja<br />\
    <img src="styles/legend/CoberturasCLC_1_19.png" /> Zonas Pantanosas<br />\
    <img src="styles/legend/CoberturasCLC_1_20.png" /> Zonas Quemadas<br />'
        });
var format_Permetro_2 = new ol.format.GeoJSON();
var features_Permetro_2 = format_Permetro_2.readFeatures(json_Permetro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permetro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permetro_2.addFeatures(features_Permetro_2);
var lyr_Permetro_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Permetro_2, 
                style: style_Permetro_2,
                interactive: true,
                title: '<img src="styles/legend/Permetro_2.png" /> Perímetro'
            });

lyr_reasaprovechables_0.setVisible(true);lyr_CoberturasCLC_1.setVisible(true);lyr_Permetro_2.setVisible(true);
var layersList = [lyr_reasaprovechables_0,lyr_CoberturasCLC_1,lyr_Permetro_2];
lyr_reasaprovechables_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'PREDIO': 'PREDIO', 'AREA': 'AREA', 'Area_ha': 'Area_ha', 'Codigo': 'Codigo', 'Insumo': 'Insumo', 'NIVEL1': 'NIVEL1', 'NIVEL2': 'NIVEL2', 'NIVEL3': 'NIVEL3', 'NIVEL4': 'NIVEL4', 'NIVEL5': 'NIVEL5', 'NIVEL6': 'NIVEL6', 'LEYENDA': 'LEYENDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tipo_Habit': 'Tipo_Habit', });
lyr_CoberturasCLC_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'PREDIO': 'PREDIO', 'AREA': 'AREA', 'Area_ha': 'Area_ha', 'Codigo': 'Codigo', 'Insumo': 'Insumo', 'NIVEL1': 'NIVEL1', 'NIVEL2': 'NIVEL2', 'NIVEL3': 'NIVEL3', 'NIVEL4': 'NIVEL4', 'NIVEL5': 'NIVEL5', 'NIVEL6': 'NIVEL6', 'LEYENDA': 'LEYENDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tipo_Habit': 'Tipo_Habit', });
lyr_Permetro_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PREDIO': 'PREDIO', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_reasaprovechables_0.set('fieldImages', {'OBJECTID_1': 'Hidden', 'PREDIO': 'TextEdit', 'AREA': 'Hidden', 'Area_ha': 'TextEdit', 'Codigo': 'Hidden', 'Insumo': 'Hidden', 'NIVEL1': 'Hidden', 'NIVEL2': 'Hidden', 'NIVEL3': 'Hidden', 'NIVEL4': 'Hidden', 'NIVEL5': 'Hidden', 'NIVEL6': 'Hidden', 'LEYENDA': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tipo_Habit': 'TextEdit', });
lyr_CoberturasCLC_1.set('fieldImages', {'OBJECTID_1': 'Hidden', 'PREDIO': 'TextEdit', 'AREA': 'Hidden', 'Area_ha': 'TextEdit', 'Codigo': 'Hidden', 'Insumo': 'Hidden', 'NIVEL1': 'Hidden', 'NIVEL2': 'Hidden', 'NIVEL3': 'Hidden', 'NIVEL4': 'Hidden', 'NIVEL5': 'Hidden', 'NIVEL6': 'Hidden', 'LEYENDA': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tipo_Habit': 'TextEdit', });
lyr_Permetro_2.set('fieldImages', {'OBJECTID': 'Hidden', 'PREDIO': 'TextEdit', 'AREA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_reasaprovechables_0.set('fieldLabels', {'PREDIO': 'inline label', 'Area_ha': 'inline label', 'LEYENDA': 'inline label', 'Tipo_Habit': 'inline label', });
lyr_CoberturasCLC_1.set('fieldLabels', {'PREDIO': 'inline label', 'Area_ha': 'inline label', 'LEYENDA': 'inline label', 'Tipo_Habit': 'inline label', });
lyr_Permetro_2.set('fieldLabels', {'PREDIO': 'inline label', 'AREA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Permetro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});