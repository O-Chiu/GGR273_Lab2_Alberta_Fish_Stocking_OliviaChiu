ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-1960650.094008, 5386131.332297, 2696087.430588, 6633178.731414]);
var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "AlbertaBoundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> AlbertaBoundary'
            });
var format_WaterBodies_1 = new ol.format.GeoJSON();
var features_WaterBodies_1 = format_WaterBodies_1.readFeatures(json_WaterBodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_WaterBodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterBodies_1.addFeatures(features_WaterBodies_1);
var lyr_WaterBodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterBodies_1, 
                style: style_WaterBodies_1,
                popuplayertitle: "Water Bodies",
                interactive: false,
                title: '<img src="styles/legend/WaterBodies_1.png" /> Water Bodies'
            });
var format_FishStockingPoints_2 = new ol.format.GeoJSON();
var features_FishStockingPoints_2 = format_FishStockingPoints_2.readFeatures(json_FishStockingPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStockingPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_2.addFeatures(features_FishStockingPoints_2);
var lyr_FishStockingPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_2, 
                style: style_FishStockingPoints_2,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_2_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/FishStockingPoints_2_1.png" /> 2550 - 8120<br />\
    <img src="styles/legend/FishStockingPoints_2_2.png" /> 8120 - 23500<br />\
    <img src="styles/legend/FishStockingPoints_2_3.png" /> 23500 - 110000<br />\
    <img src="styles/legend/FishStockingPoints_2_4.png" /> 110000 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_WaterBodies_1.setVisible(true);lyr_FishStockingPoints_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_WaterBodies_1,lyr_FishStockingPoints_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_WaterBodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingPoints_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'MAa': 'MAa', 'Map Auth_1': 'Map Auth_1', 'MA3': 'MA3', 'Map Auth_2': 'Map Auth_2', 'Map Auth_3': 'Map Auth_3', 'MapAuthor': 'MapAuthor', 'NumStock': 'NumStock', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_WaterBodies_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStockingPoints_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'MAa': 'TextEdit', 'Map Auth_1': 'TextEdit', 'MA3': 'TextEdit', 'Map Auth_2': 'TextEdit', 'Map Auth_3': 'TextEdit', 'MapAuthor': 'TextEdit', 'NumStock': 'Range', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_WaterBodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStockingPoints_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'MAa': 'hidden field', 'Map Auth_1': 'hidden field', 'MA3': 'inline label - always visible', 'Map Auth_2': 'hidden field', 'Map Auth_3': 'hidden field', 'MapAuthor': 'hidden field', 'NumStock': 'inline label - always visible', });
lyr_FishStockingPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});