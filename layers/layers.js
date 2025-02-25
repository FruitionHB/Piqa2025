var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CosmicCrisp_1 = new ol.format.GeoJSON();
var features_CosmicCrisp_1 = format_CosmicCrisp_1.readFeatures(json_CosmicCrisp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CosmicCrisp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CosmicCrisp_1.addFeatures(features_CosmicCrisp_1);
var lyr_CosmicCrisp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CosmicCrisp_1, 
                style: style_CosmicCrisp_1,
                popuplayertitle: 'Cosmic Crisp',
                interactive: true,
                title: '<img src="styles/legend/CosmicCrisp_1.png" /> Cosmic Crisp'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_CosmicCrisp_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CosmicCrisp_1];
lyr_CosmicCrisp_1.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licenced trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', 'Address2': 'Address2', });
lyr_CosmicCrisp_1.set('fieldImages', {'fid': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Actual_trees': 'TextEdit', 'Address2': 'TextEdit', });
lyr_CosmicCrisp_1.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'inline label - always visible', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - always visible', 'Yr_grafted': 'inline label - always visible', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', 'Address2': 'hidden field', });
lyr_CosmicCrisp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});