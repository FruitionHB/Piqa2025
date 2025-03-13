var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SunriseMagic_1 = new ol.format.GeoJSON();
var features_SunriseMagic_1 = format_SunriseMagic_1.readFeatures(json_SunriseMagic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SunriseMagic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SunriseMagic_1.addFeatures(features_SunriseMagic_1);
var lyr_SunriseMagic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SunriseMagic_1, 
                style: style_SunriseMagic_1,
                popuplayertitle: 'Sunrise Magic',
                interactive: true,
                title: '<img src="styles/legend/SunriseMagic_1.png" /> Sunrise Magic'
            });
var format_PiqaBoo_2 = new ol.format.GeoJSON();
var features_PiqaBoo_2 = format_PiqaBoo_2.readFeatures(json_PiqaBoo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiqaBoo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiqaBoo_2.addFeatures(features_PiqaBoo_2);
var lyr_PiqaBoo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PiqaBoo_2, 
                style: style_PiqaBoo_2,
                popuplayertitle: 'Piqa Boo',
                interactive: true,
                title: '<img src="styles/legend/PiqaBoo_2.png" /> Piqa Boo'
            });
var format_CosmicCrisp_3 = new ol.format.GeoJSON();
var features_CosmicCrisp_3 = format_CosmicCrisp_3.readFeatures(json_CosmicCrisp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CosmicCrisp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CosmicCrisp_3.addFeatures(features_CosmicCrisp_3);
var lyr_CosmicCrisp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CosmicCrisp_3, 
                style: style_CosmicCrisp_3,
                popuplayertitle: 'Cosmic Crisp',
                interactive: true,
                title: '<img src="styles/legend/CosmicCrisp_3.png" /> Cosmic Crisp'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_SunriseMagic_1.setVisible(true);lyr_PiqaBoo_2.setVisible(true);lyr_CosmicCrisp_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SunriseMagic_1,lyr_PiqaBoo_2,lyr_CosmicCrisp_3];
lyr_SunriseMagic_1.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licenced trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', 'Address2': 'Address2', });
lyr_PiqaBoo_2.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licenced trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', 'Address2': 'Address2', });
lyr_CosmicCrisp_3.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licenced trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', 'Address2': 'Address2', });
lyr_SunriseMagic_1.set('fieldImages', {'fid': '', 'Grower': '', 'Address': '', 'Region': '', 'RPIN': '', 'Block_name': '', 'Yr_planted': '', 'Yr_grafted': '', 'Row_width': '', 'Tree_space': '', 'Density': '', 'Area (ha)': '', 'Calc_trees': '', 'Licence_trees': '', 'Labels_2': '', 'Grower_block': '', 'Rootstock': '', 'Rows': '', 'Notes': '', 'Training': '', 'Actual_trees': '', 'Address2': '', });
lyr_PiqaBoo_2.set('fieldImages', {'fid': '', 'Grower': '', 'Address': '', 'Region': '', 'RPIN': '', 'Block_name': '', 'Yr_planted': '', 'Yr_grafted': '', 'Row_width': '', 'Tree_space': '', 'Density': '', 'Area (ha)': '', 'Calc_trees': '', 'Licence_trees': '', 'Labels_2': '', 'Grower_block': '', 'Rootstock': '', 'Rows': '', 'Notes': '', 'Training': '', 'Actual_trees': '', 'Address2': '', });
lyr_CosmicCrisp_3.set('fieldImages', {'fid': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Actual_trees': 'TextEdit', 'Address2': 'TextEdit', });
lyr_SunriseMagic_1.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'inline label - always visible', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - always visible', 'Yr_grafted': 'inline label - always visible', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', 'Address2': 'hidden field', });
lyr_PiqaBoo_2.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'inline label - always visible', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - always visible', 'Yr_grafted': 'inline label - always visible', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', 'Address2': 'hidden field', });
lyr_CosmicCrisp_3.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'inline label - always visible', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - always visible', 'Yr_grafted': 'inline label - always visible', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', 'Address2': 'hidden field', });
lyr_CosmicCrisp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});