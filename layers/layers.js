var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PuneGeoBoundary_1 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_1 = format_PuneGeoBoundary_1.readFeatures(json_PuneGeoBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_1.addFeatures(features_PuneGeoBoundary_1);
var lyr_PuneGeoBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_1, 
                style: style_PuneGeoBoundary_1,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_1.png" /> Pune Geo Boundary'
            });
var format_PimpreChinchwadboundary_2 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_2 = format_PimpreChinchwadboundary_2.readFeatures(json_PimpreChinchwadboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_2.addFeatures(features_PimpreChinchwadboundary_2);
var lyr_PimpreChinchwadboundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_2, 
                style: style_PimpreChinchwadboundary_2,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_2.png" /> Pimpre Chinchwad boundary'
            });
var format_KirkeeBoundary_3 = new ol.format.GeoJSON();
var features_KirkeeBoundary_3 = format_KirkeeBoundary_3.readFeatures(json_KirkeeBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_3.addFeatures(features_KirkeeBoundary_3);
var lyr_KirkeeBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_3, 
                style: style_KirkeeBoundary_3,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_3.png" /> Kirkee Boundary'
            });
var format_Lahagaon_4 = new ol.format.GeoJSON();
var features_Lahagaon_4 = format_Lahagaon_4.readFeatures(json_Lahagaon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_4.addFeatures(features_Lahagaon_4);
var lyr_Lahagaon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_4, 
                style: style_Lahagaon_4,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_4.png" /> Lahagaon'
            });
var format_Yavatmal_5 = new ol.format.GeoJSON();
var features_Yavatmal_5 = format_Yavatmal_5.readFeatures(json_Yavatmal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_5.addFeatures(features_Yavatmal_5);
var lyr_Yavatmal_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_5, 
                style: style_Yavatmal_5,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_5.png" /> Yavatmal'
            });
var format_Keshavnagar_6 = new ol.format.GeoJSON();
var features_Keshavnagar_6 = format_Keshavnagar_6.readFeatures(json_Keshavnagar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_6.addFeatures(features_Keshavnagar_6);
var lyr_Keshavnagar_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_6, 
                style: style_Keshavnagar_6,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_6.png" /> Keshavnagar'
            });
var format_PimpleGaurav_7 = new ol.format.GeoJSON();
var features_PimpleGaurav_7 = format_PimpleGaurav_7.readFeatures(json_PimpleGaurav_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpleGaurav_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpleGaurav_7.addFeatures(features_PimpleGaurav_7);
var lyr_PimpleGaurav_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpleGaurav_7, 
                style: style_PimpleGaurav_7,
                popuplayertitle: "Pimple Gaurav",
                interactive: true,
                title: '<img src="styles/legend/PimpleGaurav_7.png" /> Pimple Gaurav'
            });
var format_Pimpalesaudagar_8 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_8 = format_Pimpalesaudagar_8.readFeatures(json_Pimpalesaudagar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_8.addFeatures(features_Pimpalesaudagar_8);
var lyr_Pimpalesaudagar_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_8, 
                style: style_Pimpalesaudagar_8,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_8.png" /> Pimpale saudagar'
            });
var format_AllPunePopReprojected_9 = new ol.format.GeoJSON();
var features_AllPunePopReprojected_9 = format_AllPunePopReprojected_9.readFeatures(json_AllPunePopReprojected_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopReprojected_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopReprojected_9.addFeatures(features_AllPunePopReprojected_9);
var lyr_AllPunePopReprojected_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopReprojected_9, 
                style: style_AllPunePopReprojected_9,
                popuplayertitle: "All Pune Pop Reprojected",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopReprojected_9.png" /> All Pune Pop Reprojected'
            });
var format_AllPunePopsep_10 = new ol.format.GeoJSON();
var features_AllPunePopsep_10 = format_AllPunePopsep_10.readFeatures(json_AllPunePopsep_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopsep_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopsep_10.addFeatures(features_AllPunePopsep_10);
var lyr_AllPunePopsep_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopsep_10, 
                style: style_AllPunePopsep_10,
                popuplayertitle: "All Pune Pop sep",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopsep_10.png" /> All Pune Pop sep'
            });
var format_trafficsignal_11 = new ol.format.GeoJSON();
var features_trafficsignal_11 = format_trafficsignal_11.readFeatures(json_trafficsignal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trafficsignal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trafficsignal_11.addFeatures(features_trafficsignal_11);
var lyr_trafficsignal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trafficsignal_11, 
                style: style_trafficsignal_11,
                popuplayertitle: "traffic signal",
                interactive: true,
                title: '<img src="styles/legend/trafficsignal_11.png" /> traffic signal'
            });
var format_PublicBuildings_12 = new ol.format.GeoJSON();
var features_PublicBuildings_12 = format_PublicBuildings_12.readFeatures(json_PublicBuildings_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_12.addFeatures(features_PublicBuildings_12);
var lyr_PublicBuildings_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_12, 
                style: style_PublicBuildings_12,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_12.png" /> Public Buildings'
            });
var format_Offices_13 = new ol.format.GeoJSON();
var features_Offices_13 = format_Offices_13.readFeatures(json_Offices_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_13.addFeatures(features_Offices_13);
var lyr_Offices_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Offices_13, 
                style: style_Offices_13,
                popuplayertitle: "Offices",
                interactive: true,
                title: '<img src="styles/legend/Offices_13.png" /> Offices'
            });
var format_Temple_14 = new ol.format.GeoJSON();
var features_Temple_14 = format_Temple_14.readFeatures(json_Temple_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_14.addFeatures(features_Temple_14);
var lyr_Temple_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_14, 
                style: style_Temple_14,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_14.png" /> Temple'
            });
var format_Industries_15 = new ol.format.GeoJSON();
var features_Industries_15 = format_Industries_15.readFeatures(json_Industries_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_15.addFeatures(features_Industries_15);
var lyr_Industries_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_15, 
                style: style_Industries_15,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_15.png" /> Industries'
            });
var format_hospital_16 = new ol.format.GeoJSON();
var features_hospital_16 = format_hospital_16.readFeatures(json_hospital_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_16.addFeatures(features_hospital_16);
var lyr_hospital_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_16, 
                style: style_hospital_16,
                popuplayertitle: "hospital",
                interactive: true,
                title: '<img src="styles/legend/hospital_16.png" /> hospital'
            });
var format_Industries_17 = new ol.format.GeoJSON();
var features_Industries_17 = format_Industries_17.readFeatures(json_Industries_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_17.addFeatures(features_Industries_17);
var lyr_Industries_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_17, 
                style: style_Industries_17,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_17.png" /> Industries'
            });
var format_139DRoute_18 = new ol.format.GeoJSON();
var features_139DRoute_18 = format_139DRoute_18.readFeatures(json_139DRoute_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139DRoute_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139DRoute_18.addFeatures(features_139DRoute_18);
var lyr_139DRoute_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139DRoute_18, 
                style: style_139DRoute_18,
                popuplayertitle: "139D Route",
                interactive: true,
                title: '139D Route'
            });
var format_Route139DMtrs_19 = new ol.format.GeoJSON();
var features_Route139DMtrs_19 = format_Route139DMtrs_19.readFeatures(json_Route139DMtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route139DMtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route139DMtrs_19.addFeatures(features_Route139DMtrs_19);
var lyr_Route139DMtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route139DMtrs_19, 
                style: style_Route139DMtrs_19,
                popuplayertitle: "Route 139D Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route139DMtrs_19.png" /> Route 139D Mtrs'
            });
var format_139DStops_20 = new ol.format.GeoJSON();
var features_139DStops_20 = format_139DStops_20.readFeatures(json_139DStops_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139DStops_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139DStops_20.addFeatures(features_139DStops_20);
var lyr_139DStops_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139DStops_20, 
                style: style_139DStops_20,
                popuplayertitle: "139D Stops",
                interactive: true,
    title: '139D Stops<br />\
    <img src="styles/legend/139DStops_20_0.png" /> 1.0<br />\
    <img src="styles/legend/139DStops_20_1.png" /> 10.0<br />\
    <img src="styles/legend/139DStops_20_2.png" /> 11.0<br />\
    <img src="styles/legend/139DStops_20_3.png" /> 12.0<br />\
    <img src="styles/legend/139DStops_20_4.png" /> 13.0<br />\
    <img src="styles/legend/139DStops_20_5.png" /> 14.0<br />\
    <img src="styles/legend/139DStops_20_6.png" /> 15.0<br />\
    <img src="styles/legend/139DStops_20_7.png" /> 16.0<br />\
    <img src="styles/legend/139DStops_20_8.png" /> 17.0<br />\
    <img src="styles/legend/139DStops_20_9.png" /> 18.0<br />\
    <img src="styles/legend/139DStops_20_10.png" /> 2.0<br />\
    <img src="styles/legend/139DStops_20_11.png" /> 3.0<br />\
    <img src="styles/legend/139DStops_20_12.png" /> 4.0<br />\
    <img src="styles/legend/139DStops_20_13.png" /> 5.0<br />\
    <img src="styles/legend/139DStops_20_14.png" /> 6.0<br />\
    <img src="styles/legend/139DStops_20_15.png" /> 7.0<br />\
    <img src="styles/legend/139DStops_20_16.png" /> 8.0<br />\
    <img src="styles/legend/139DStops_20_17.png" /> 9.0<br />\
    <img src="styles/legend/139DStops_20_18.png" /> <br />'
        });
var format_Rt139Pop1000MTr_21 = new ol.format.GeoJSON();
var features_Rt139Pop1000MTr_21 = format_Rt139Pop1000MTr_21.readFeatures(json_Rt139Pop1000MTr_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Pop1000MTr_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Pop1000MTr_21.addFeatures(features_Rt139Pop1000MTr_21);
var lyr_Rt139Pop1000MTr_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Pop1000MTr_21, 
                style: style_Rt139Pop1000MTr_21,
                popuplayertitle: "Rt 139 Pop 1000 MTr",
                interactive: true,
                title: '<img src="styles/legend/Rt139Pop1000MTr_21.png" /> Rt 139 Pop 1000 MTr'
            });
var format_Rt139Pop500MTr_22 = new ol.format.GeoJSON();
var features_Rt139Pop500MTr_22 = format_Rt139Pop500MTr_22.readFeatures(json_Rt139Pop500MTr_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Pop500MTr_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Pop500MTr_22.addFeatures(features_Rt139Pop500MTr_22);
var lyr_Rt139Pop500MTr_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Pop500MTr_22, 
                style: style_Rt139Pop500MTr_22,
                popuplayertitle: "Rt 139 Pop 500 MTr",
                interactive: true,
                title: '<img src="styles/legend/Rt139Pop500MTr_22.png" /> Rt 139 Pop 500 MTr'
            });
var format_Rt139Pop250MTr_23 = new ol.format.GeoJSON();
var features_Rt139Pop250MTr_23 = format_Rt139Pop250MTr_23.readFeatures(json_Rt139Pop250MTr_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Pop250MTr_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Pop250MTr_23.addFeatures(features_Rt139Pop250MTr_23);
var lyr_Rt139Pop250MTr_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Pop250MTr_23, 
                style: style_Rt139Pop250MTr_23,
                popuplayertitle: "Rt 139 Pop 250 MTr",
                interactive: true,
                title: '<img src="styles/legend/Rt139Pop250MTr_23.png" /> Rt 139 Pop 250 MTr'
            });
var format_Rt139Pop100MTr_24 = new ol.format.GeoJSON();
var features_Rt139Pop100MTr_24 = format_Rt139Pop100MTr_24.readFeatures(json_Rt139Pop100MTr_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Pop100MTr_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Pop100MTr_24.addFeatures(features_Rt139Pop100MTr_24);
var lyr_Rt139Pop100MTr_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Pop100MTr_24, 
                style: style_Rt139Pop100MTr_24,
                popuplayertitle: "Rt 139 Pop 100 MTr",
                interactive: true,
                title: '<img src="styles/legend/Rt139Pop100MTr_24.png" /> Rt 139 Pop 100 MTr'
            });
var format_Rt139Education_25 = new ol.format.GeoJSON();
var features_Rt139Education_25 = format_Rt139Education_25.readFeatures(json_Rt139Education_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Education_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Education_25.addFeatures(features_Rt139Education_25);
var lyr_Rt139Education_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Education_25, 
                style: style_Rt139Education_25,
                popuplayertitle: "Rt 139 Education",
                interactive: true,
                title: '<img src="styles/legend/Rt139Education_25.png" /> Rt 139 Education'
            });
var format_Route139Hospitals_26 = new ol.format.GeoJSON();
var features_Route139Hospitals_26 = format_Route139Hospitals_26.readFeatures(json_Route139Hospitals_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route139Hospitals_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route139Hospitals_26.addFeatures(features_Route139Hospitals_26);
var lyr_Route139Hospitals_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route139Hospitals_26, 
                style: style_Route139Hospitals_26,
                popuplayertitle: "Route 139 Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Route139Hospitals_26.png" /> Route 139 Hospitals'
            });
var format_Rt139Offices_27 = new ol.format.GeoJSON();
var features_Rt139Offices_27 = format_Rt139Offices_27.readFeatures(json_Rt139Offices_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Offices_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Offices_27.addFeatures(features_Rt139Offices_27);
var lyr_Rt139Offices_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Offices_27, 
                style: style_Rt139Offices_27,
                popuplayertitle: "Rt 139 Offices",
                interactive: true,
                title: '<img src="styles/legend/Rt139Offices_27.png" /> Rt 139 Offices'
            });
var format_RT139PSU_28 = new ol.format.GeoJSON();
var features_RT139PSU_28 = format_RT139PSU_28.readFeatures(json_RT139PSU_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT139PSU_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT139PSU_28.addFeatures(features_RT139PSU_28);
var lyr_RT139PSU_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT139PSU_28, 
                style: style_RT139PSU_28,
                popuplayertitle: "RT 139 PSU",
                interactive: true,
                title: '<img src="styles/legend/RT139PSU_28.png" /> RT 139 PSU'
            });
var format_Rt139Temple_29 = new ol.format.GeoJSON();
var features_Rt139Temple_29 = format_Rt139Temple_29.readFeatures(json_Rt139Temple_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Temple_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Temple_29.addFeatures(features_Rt139Temple_29);
var lyr_Rt139Temple_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Temple_29, 
                style: style_Rt139Temple_29,
                popuplayertitle: "Rt 139 Temple",
                interactive: true,
                title: '<img src="styles/legend/Rt139Temple_29.png" /> Rt 139 Temple'
            });
var format_Rt139Signals_30 = new ol.format.GeoJSON();
var features_Rt139Signals_30 = format_Rt139Signals_30.readFeatures(json_Rt139Signals_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Signals_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Signals_30.addFeatures(features_Rt139Signals_30);
var lyr_Rt139Signals_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Signals_30, 
                style: style_Rt139Signals_30,
                popuplayertitle: "Rt 139 Signals",
                interactive: true,
                title: '<img src="styles/legend/Rt139Signals_30.png" /> Rt 139 Signals'
            });
var format_Rt139StopPop_31 = new ol.format.GeoJSON();
var features_Rt139StopPop_31 = format_Rt139StopPop_31.readFeatures(json_Rt139StopPop_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139StopPop_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139StopPop_31.addFeatures(features_Rt139StopPop_31);
var lyr_Rt139StopPop_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139StopPop_31, 
                style: style_Rt139StopPop_31,
                popuplayertitle: "Rt 139 Stop Pop",
                interactive: true,
    title: 'Rt 139 Stop Pop<br />\
    <img src="styles/legend/Rt139StopPop_31_0.png" /> 10 min<br />'
        });
var format_Route139UMtr_32 = new ol.format.GeoJSON();
var features_Route139UMtr_32 = format_Route139UMtr_32.readFeatures(json_Route139UMtr_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route139UMtr_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route139UMtr_32.addFeatures(features_Route139UMtr_32);
var lyr_Route139UMtr_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route139UMtr_32, 
                style: style_Route139UMtr_32,
                popuplayertitle: "Route 139U Mtr",
                interactive: true,
                title: '<img src="styles/legend/Route139UMtr_32.png" /> Route 139U Mtr'
            });
var format_Rt139RevenueAssessment_33 = new ol.format.GeoJSON();
var features_Rt139RevenueAssessment_33 = format_Rt139RevenueAssessment_33.readFeatures(json_Rt139RevenueAssessment_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139RevenueAssessment_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139RevenueAssessment_33.addFeatures(features_Rt139RevenueAssessment_33);
var lyr_Rt139RevenueAssessment_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139RevenueAssessment_33, 
                style: style_Rt139RevenueAssessment_33,
                popuplayertitle: "Rt 139 Revenue Assessment",
                interactive: true,
                title: '<img src="styles/legend/Rt139RevenueAssessment_33.png" /> Rt 139 Revenue Assessment'
            });
var format_139stopsPop_34 = new ol.format.GeoJSON();
var features_139stopsPop_34 = format_139stopsPop_34.readFeatures(json_139stopsPop_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139stopsPop_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139stopsPop_34.addFeatures(features_139stopsPop_34);
var lyr_139stopsPop_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139stopsPop_34, 
                style: style_139stopsPop_34,
                popuplayertitle: "139 stops Pop",
                interactive: true,
                title: '<img src="styles/legend/139stopsPop_34.png" /> 139 stops Pop'
            });
var format_139URoute_35 = new ol.format.GeoJSON();
var features_139URoute_35 = format_139URoute_35.readFeatures(json_139URoute_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139URoute_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139URoute_35.addFeatures(features_139URoute_35);
var lyr_139URoute_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139URoute_35, 
                style: style_139URoute_35,
                popuplayertitle: "139U Route",
                interactive: true,
                title: '139U Route'
            });
var format_139UStops_36 = new ol.format.GeoJSON();
var features_139UStops_36 = format_139UStops_36.readFeatures(json_139UStops_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139UStops_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139UStops_36.addFeatures(features_139UStops_36);
var lyr_139UStops_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139UStops_36, 
                style: style_139UStops_36,
                popuplayertitle: "139U Stops",
                interactive: true,
    title: '139U Stops<br />\
    <img src="styles/legend/139UStops_36_0.png" /> 1.0<br />\
    <img src="styles/legend/139UStops_36_1.png" /> 10.0<br />\
    <img src="styles/legend/139UStops_36_2.png" /> 11.0<br />\
    <img src="styles/legend/139UStops_36_3.png" /> 12.0<br />\
    <img src="styles/legend/139UStops_36_4.png" /> 13.0<br />\
    <img src="styles/legend/139UStops_36_5.png" /> 14.0<br />\
    <img src="styles/legend/139UStops_36_6.png" /> 15.0<br />\
    <img src="styles/legend/139UStops_36_7.png" /> 16.0<br />\
    <img src="styles/legend/139UStops_36_8.png" /> 17.0<br />\
    <img src="styles/legend/139UStops_36_9.png" /> 18.0<br />\
    <img src="styles/legend/139UStops_36_10.png" /> 2.0<br />\
    <img src="styles/legend/139UStops_36_11.png" /> 3.0<br />\
    <img src="styles/legend/139UStops_36_12.png" /> 4.0<br />\
    <img src="styles/legend/139UStops_36_13.png" /> 5.0<br />\
    <img src="styles/legend/139UStops_36_14.png" /> 6.0<br />\
    <img src="styles/legend/139UStops_36_15.png" /> 7.0<br />\
    <img src="styles/legend/139UStops_36_16.png" /> 8.0<br />\
    <img src="styles/legend/139UStops_36_17.png" /> 9.0<br />\
    <img src="styles/legend/139UStops_36_18.png" /> <br />'
        });
var format_139UStgRidership_37 = new ol.format.GeoJSON();
var features_139UStgRidership_37 = format_139UStgRidership_37.readFeatures(json_139UStgRidership_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139UStgRidership_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139UStgRidership_37.addFeatures(features_139UStgRidership_37);
var lyr_139UStgRidership_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139UStgRidership_37, 
                style: style_139UStgRidership_37,
                popuplayertitle: "139U Stg Ridership%",
                interactive: true,
                title: '<img src="styles/legend/139UStgRidership_37.png" /> 139U Stg Ridership%'
            });
var format_139DStgRidership_38 = new ol.format.GeoJSON();
var features_139DStgRidership_38 = format_139DStgRidership_38.readFeatures(json_139DStgRidership_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139DStgRidership_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139DStgRidership_38.addFeatures(features_139DStgRidership_38);
var lyr_139DStgRidership_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139DStgRidership_38, 
                style: style_139DStgRidership_38,
                popuplayertitle: "139D Stg Ridership %",
                interactive: true,
    title: '139D Stg Ridership %<br />\
    <img src="styles/legend/139DStgRidership_38_0.png" /> 1<br />\
    <img src="styles/legend/139DStgRidership_38_1.png" /> 2<br />\
    <img src="styles/legend/139DStgRidership_38_2.png" /> 3<br />\
    <img src="styles/legend/139DStgRidership_38_3.png" /> 4<br />\
    <img src="styles/legend/139DStgRidership_38_4.png" /> 5<br />\
    <img src="styles/legend/139DStgRidership_38_5.png" /> 6<br />\
    <img src="styles/legend/139DStgRidership_38_6.png" /> 7<br />\
    <img src="styles/legend/139DStgRidership_38_7.png" /> 8<br />\
    <img src="styles/legend/139DStgRidership_38_8.png" /> 9<br />\
    <img src="styles/legend/139DStgRidership_38_9.png" /> 10<br />\
    <img src="styles/legend/139DStgRidership_38_10.png" /> 11<br />\
    <img src="styles/legend/139DStgRidership_38_11.png" /> 12<br />\
    <img src="styles/legend/139DStgRidership_38_12.png" /> 13<br />\
    <img src="styles/legend/139DStgRidership_38_13.png" /> 14<br />\
    <img src="styles/legend/139DStgRidership_38_14.png" /> 15<br />\
    <img src="styles/legend/139DStgRidership_38_15.png" /> 16<br />\
    <img src="styles/legend/139DStgRidership_38_16.png" /> 17<br />\
    <img src="styles/legend/139DStgRidership_38_17.png" /> 18<br />\
    <img src="styles/legend/139DStgRidership_38_18.png" /> 19<br />\
    <img src="styles/legend/139DStgRidership_38_19.png" /> <br />'
        });
var format_Rt139RWI_39 = new ol.format.GeoJSON();
var features_Rt139RWI_39 = format_Rt139RWI_39.readFeatures(json_Rt139RWI_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139RWI_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139RWI_39.addFeatures(features_Rt139RWI_39);
var lyr_Rt139RWI_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139RWI_39, 
                style: style_Rt139RWI_39,
                popuplayertitle: "Rt 139 RWI",
                interactive: true,
    title: 'Rt 139 RWI<br />\
    <img src="styles/legend/Rt139RWI_39_0.png" /> 0.706 - 0.73<br />\
    <img src="styles/legend/Rt139RWI_39_1.png" /> 0.73 - 0.7833<br />\
    <img src="styles/legend/Rt139RWI_39_2.png" /> 0.7833 - 0.866<br />\
    <img src="styles/legend/Rt139RWI_39_3.png" /> 0.866 - 0.8687<br />\
    <img src="styles/legend/Rt139RWI_39_4.png" /> 0.8687 - 0.8883<br />\
    <img src="styles/legend/Rt139RWI_39_5.png" /> 0.8883 - 0.925<br />\
    <img src="styles/legend/Rt139RWI_39_6.png" /> 0.925 - 0.9357<br />\
    <img src="styles/legend/Rt139RWI_39_7.png" /> 0.9357 - 0.943<br />\
    <img src="styles/legend/Rt139RWI_39_8.png" /> 0.943 - 0.947<br />\
    <img src="styles/legend/Rt139RWI_39_9.png" /> 0.947 - 1.0223<br />\
    <img src="styles/legend/Rt139RWI_39_10.png" /> 1.0223 - 1.1037<br />\
    <img src="styles/legend/Rt139RWI_39_11.png" /> 1.1037 - 1.191<br />\
    <img src="styles/legend/Rt139RWI_39_12.png" /> 1.191 - 1.4197<br />\
    <img src="styles/legend/Rt139RWI_39_13.png" /> 1.4197 - 1.5513<br />\
    <img src="styles/legend/Rt139RWI_39_14.png" /> 1.5513 - 1.586<br />'
        });
var format_Rt139RidershipPAx_40 = new ol.format.GeoJSON();
var features_Rt139RidershipPAx_40 = format_Rt139RidershipPAx_40.readFeatures(json_Rt139RidershipPAx_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139RidershipPAx_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139RidershipPAx_40.addFeatures(features_Rt139RidershipPAx_40);
var lyr_Rt139RidershipPAx_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139RidershipPAx_40, 
                style: style_Rt139RidershipPAx_40,
                popuplayertitle: "Rt 139 Ridership PAx",
                interactive: true,
                title: '<img src="styles/legend/Rt139RidershipPAx_40.png" /> Rt 139 Ridership PAx'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PuneGeoBoundary_1.setVisible(true);lyr_PimpreChinchwadboundary_2.setVisible(true);lyr_KirkeeBoundary_3.setVisible(true);lyr_Lahagaon_4.setVisible(true);lyr_Yavatmal_5.setVisible(true);lyr_Keshavnagar_6.setVisible(true);lyr_PimpleGaurav_7.setVisible(true);lyr_Pimpalesaudagar_8.setVisible(true);lyr_AllPunePopReprojected_9.setVisible(true);lyr_AllPunePopsep_10.setVisible(true);lyr_trafficsignal_11.setVisible(true);lyr_PublicBuildings_12.setVisible(true);lyr_Offices_13.setVisible(true);lyr_Temple_14.setVisible(true);lyr_Industries_15.setVisible(true);lyr_hospital_16.setVisible(true);lyr_Industries_17.setVisible(true);lyr_139DRoute_18.setVisible(true);lyr_Route139DMtrs_19.setVisible(true);lyr_139DStops_20.setVisible(true);lyr_Rt139Pop1000MTr_21.setVisible(true);lyr_Rt139Pop500MTr_22.setVisible(true);lyr_Rt139Pop250MTr_23.setVisible(true);lyr_Rt139Pop100MTr_24.setVisible(true);lyr_Rt139Education_25.setVisible(true);lyr_Route139Hospitals_26.setVisible(true);lyr_Rt139Offices_27.setVisible(true);lyr_RT139PSU_28.setVisible(true);lyr_Rt139Temple_29.setVisible(true);lyr_Rt139Signals_30.setVisible(true);lyr_Rt139StopPop_31.setVisible(true);lyr_Route139UMtr_32.setVisible(true);lyr_Rt139RevenueAssessment_33.setVisible(true);lyr_139stopsPop_34.setVisible(true);lyr_139URoute_35.setVisible(true);lyr_139UStops_36.setVisible(true);lyr_139UStgRidership_37.setVisible(true);lyr_139DStgRidership_38.setVisible(true);lyr_Rt139RWI_39.setVisible(true);lyr_Rt139RidershipPAx_40.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PuneGeoBoundary_1,lyr_PimpreChinchwadboundary_2,lyr_KirkeeBoundary_3,lyr_Lahagaon_4,lyr_Yavatmal_5,lyr_Keshavnagar_6,lyr_PimpleGaurav_7,lyr_Pimpalesaudagar_8,lyr_AllPunePopReprojected_9,lyr_AllPunePopsep_10,lyr_trafficsignal_11,lyr_PublicBuildings_12,lyr_Offices_13,lyr_Temple_14,lyr_Industries_15,lyr_hospital_16,lyr_Industries_17,lyr_139DRoute_18,lyr_Route139DMtrs_19,lyr_139DStops_20,lyr_Rt139Pop1000MTr_21,lyr_Rt139Pop500MTr_22,lyr_Rt139Pop250MTr_23,lyr_Rt139Pop100MTr_24,lyr_Rt139Education_25,lyr_Route139Hospitals_26,lyr_Rt139Offices_27,lyr_RT139PSU_28,lyr_Rt139Temple_29,lyr_Rt139Signals_30,lyr_Rt139StopPop_31,lyr_Route139UMtr_32,lyr_Rt139RevenueAssessment_33,lyr_139stopsPop_34,lyr_139URoute_35,lyr_139UStops_36,lyr_139UStgRidership_37,lyr_139DStgRidership_38,lyr_Rt139RWI_39,lyr_Rt139RidershipPAx_40];
lyr_PuneGeoBoundary_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpleGaurav_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Pimpalesaudagar_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllPunePopReprojected_9.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Area': 'Area', });
lyr_AllPunePopsep_10.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_trafficsignal_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', });
lyr_PublicBuildings_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', });
lyr_Offices_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', });
lyr_Temple_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', });
lyr_Industries_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_hospital_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Industries_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'Name_2': 'Name_2', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_139DRoute_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Route139DMtrs_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_139DStops_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'unnamed__1_': 'unnamed__1_', });
lyr_Rt139Pop1000MTr_21.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt139Pop500MTr_22.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt139Pop250MTr_23.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt139Pop100MTr_24.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt139Education_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_full': 'addr_full', 'locked': 'locked', 'material': 'material', 'colour': 'colour', 'start_date': 'start_date', 'level': 'level', 'descriptio': 'descriptio', 'addr_floor': 'addr_floor', 'nursery': 'nursery', 'mobile': 'mobile', 'isced_leve': 'isced_leve', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'brand': 'brand', 'branch': 'branch', 'addr_place': 'addr_place', 'polling_st': 'polling_st', 'ref': 'ref', 'operator_w': 'operator_w', 'operator_s': 'operator_s', 'check_date': 'check_date', 'language_e': 'language_e', 'operator_t': 'operator_t', 'denominati': 'denominati', 'wheelchair': 'wheelchair', 'entrance': 'entrance', 'door': 'door', 'religion': 'religion', 'opening_ho': 'opening_ho', 'email': 'email', 'name_pl': 'name_pl', 'indoor_lev': 'indoor_lev', 'operator': 'operator', 'contact_ph': 'contact_ph', 'access': 'access', 'school': 'school', 'designatio': 'designatio', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'barrier': 'barrier', 'int_name': 'int_name', 'addr_hou_1': 'addr_hou_1', 'internet_a': 'internet_a', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'website': 'website', 'preschool': 'preschool', 'phone': 'phone', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'image': 'image', 'grades': 'grades', 'contact_mo': 'contact_mo', 'contact_em': 'contact_em', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Route139Hospitals_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139Offices_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_RT139PSU_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139Temple_29.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139Signals_30.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139StopPop_31.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Route139UMtr_32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rt139RevenueAssessment_33.set('fieldAliases', {'Pop': 'Pop', 'layer': 'layer', 'Yr Rev': 'Yr Rev', 'Daily Rev': 'Daily Rev', 'Pax': 'Pax', 'Rev/Pop': 'Rev/Pop', 'Rev/Pax': 'Rev/Pax', });
lyr_139stopsPop_34.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_139URoute_35.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_139UStops_36.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'unnamed__1_': 'unnamed__1_', });
lyr_139UStgRidership_37.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Stg': 'Stg', 'Stop_Code': 'Stop_Code', 'K__M_': 'K__M_', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Daily_Pax': 'Daily_Pax', 'Pax_': 'Pax_', });
lyr_139DStgRidership_38.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'K__M_': 'K__M_', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Ridership': 'Ridership', 'Daily': 'Daily', 'Daily___Ridership': 'Daily___Ridership', });
lyr_Rt139RWI_39.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'Name': 'Name', 'Pop': 'Pop', 'Hospitals': 'Hospitals', 'Education': 'Education', 'Temple': 'Temple', 'Signal': 'Signal', 'PSU': 'PSU', });
lyr_Rt139RidershipPAx_40.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Ridership': 'Ridership', });
lyr_PuneGeoBoundary_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpleGaurav_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Pimpalesaudagar_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllPunePopReprojected_9.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', });
lyr_AllPunePopsep_10.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_trafficsignal_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', });
lyr_PublicBuildings_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_Offices_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', });
lyr_Temple_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_Industries_15.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', });
lyr_hospital_16.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', });
lyr_Industries_17.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'Name_2': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_count': '', '_sum': '', '_mean': '', 'Pop': '', });
lyr_139DRoute_18.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Route139DMtrs_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_139DStops_20.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'unnamed__1_': 'TextEdit', });
lyr_Rt139Pop1000MTr_21.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt139Pop500MTr_22.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt139Pop250MTr_23.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt139Pop100MTr_24.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt139Education_25.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'locked': 'TextEdit', 'material': 'TextEdit', 'colour': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'descriptio': 'TextEdit', 'addr_floor': 'TextEdit', 'nursery': 'TextEdit', 'mobile': 'TextEdit', 'isced_leve': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'brand': 'TextEdit', 'branch': 'TextEdit', 'addr_place': 'TextEdit', 'polling_st': 'TextEdit', 'ref': 'TextEdit', 'operator_w': 'TextEdit', 'operator_s': 'TextEdit', 'check_date': 'TextEdit', 'language_e': 'TextEdit', 'operator_t': 'TextEdit', 'denominati': 'TextEdit', 'wheelchair': 'TextEdit', 'entrance': 'TextEdit', 'door': 'TextEdit', 'religion': 'TextEdit', 'opening_ho': 'TextEdit', 'email': 'TextEdit', 'name_pl': 'TextEdit', 'indoor_lev': 'TextEdit', 'operator': 'TextEdit', 'contact_ph': 'TextEdit', 'access': 'TextEdit', 'school': 'TextEdit', 'designatio': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'barrier': 'TextEdit', 'int_name': 'TextEdit', 'addr_hou_1': 'TextEdit', 'internet_a': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'website': 'TextEdit', 'preschool': 'TextEdit', 'phone': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'image': 'TextEdit', 'grades': 'TextEdit', 'contact_mo': 'TextEdit', 'contact_em': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route139Hospitals_26.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139Offices_27.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_RT139PSU_28.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139Temple_29.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139Signals_30.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139StopPop_31.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Route139UMtr_32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Rt139RevenueAssessment_33.set('fieldImages', {'Pop': 'TextEdit', 'layer': 'TextEdit', 'Yr Rev': 'Range', 'Daily Rev': 'Range', 'Pax': 'TextEdit', 'Rev/Pop': 'TextEdit', 'Rev/Pax': 'TextEdit', });
lyr_139stopsPop_34.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Pax': '', 'Ridership%': '', });
lyr_139URoute_35.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_139UStops_36.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'unnamed__1_': 'TextEdit', });
lyr_139UStgRidership_37.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Stg': 'TextEdit', 'Stop_Code': 'TextEdit', 'K__M_': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Pax': 'TextEdit', 'Daily_Pax': 'TextEdit', 'Pax_': 'TextEdit', });
lyr_139DStgRidership_38.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'K__M_': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Ridership': 'TextEdit', 'Daily': 'TextEdit', 'Daily___Ridership': 'TextEdit', });
lyr_Rt139RWI_39.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'Name': 'TextEdit', 'Pop': 'TextEdit', 'Hospitals': 'TextEdit', 'Education': 'TextEdit', 'Temple': 'TextEdit', 'Signal': 'TextEdit', 'PSU': 'TextEdit', });
lyr_Rt139RidershipPAx_40.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'TextEdit', 'Ridership': 'TextEdit', });
lyr_PuneGeoBoundary_1.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_2.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_3.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_4.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_5.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_6.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpleGaurav_7.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Pimpalesaudagar_8.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllPunePopReprojected_9.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', 'Area': 'hidden field', });
lyr_AllPunePopsep_10.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_trafficsignal_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'header label - visible with data', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'inline label - always visible', 'junction': 'hidden field', });
lyr_PublicBuildings_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', });
lyr_Offices_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', });
lyr_Temple_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', });
lyr_Industries_15.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_hospital_16.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', });
lyr_Industries_17.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'hidden field', });
lyr_139DRoute_18.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Route139DMtrs_19.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_139DStops_20.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - always visible', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'unnamed__1_': 'hidden field', });
lyr_Rt139Pop1000MTr_21.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt139Pop500MTr_22.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt139Pop250MTr_23.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt139Pop100MTr_24.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt139Education_25.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_full': 'hidden field', 'locked': 'hidden field', 'material': 'hidden field', 'colour': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'descriptio': 'hidden field', 'addr_floor': 'hidden field', 'nursery': 'hidden field', 'mobile': 'hidden field', 'isced_leve': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'addr_place': 'hidden field', 'polling_st': 'hidden field', 'ref': 'hidden field', 'operator_w': 'hidden field', 'operator_s': 'hidden field', 'check_date': 'hidden field', 'language_e': 'hidden field', 'operator_t': 'hidden field', 'denominati': 'hidden field', 'wheelchair': 'hidden field', 'entrance': 'hidden field', 'door': 'hidden field', 'religion': 'hidden field', 'opening_ho': 'hidden field', 'email': 'hidden field', 'name_pl': 'hidden field', 'indoor_lev': 'hidden field', 'operator': 'hidden field', 'contact_ph': 'hidden field', 'access': 'hidden field', 'school': 'hidden field', 'designatio': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'barrier': 'hidden field', 'int_name': 'hidden field', 'addr_hou_1': 'hidden field', 'internet_a': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'website': 'hidden field', 'preschool': 'hidden field', 'phone': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'image': 'hidden field', 'grades': 'hidden field', 'contact_mo': 'hidden field', 'contact_em': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_distr': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Route139Hospitals_26.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139Offices_27.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_RT139PSU_28.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139Temple_29.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139Signals_30.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'junction': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139StopPop_31.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'header label - visible with data', 'TOTAL_POP': 'inline label - visible with data', });
lyr_Route139UMtr_32.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Rt139RevenueAssessment_33.set('fieldLabels', {'Pop': 'inline label - visible with data', 'layer': 'header label - visible with data', 'Yr Rev': 'inline label - visible with data', 'Daily Rev': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Rev/Pop': 'inline label - visible with data', 'Rev/Pax': 'header label - always visible', });
lyr_139stopsPop_34.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'inline label - visible with data', });
lyr_139URoute_35.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_139UStops_36.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'unnamed__1_': 'hidden field', });
lyr_139UStgRidership_37.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Stg': 'inline label - always visible', 'Stop_Code': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Daily_Pax': 'inline label - visible with data', 'Pax_': 'header label - always visible', });
lyr_139DStgRidership_38.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Stg': 'inline label - always visible', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Ridership': 'inline label - visible with data', 'Daily': 'inline label - visible with data', 'Daily___Ridership': 'header label - always visible', });
lyr_Rt139RWI_39.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'Name': 'header label - visible with data', 'Pop': 'hidden field', 'Hospitals': 'hidden field', 'Education': 'hidden field', 'Temple': 'hidden field', 'Signal': 'hidden field', 'PSU': 'hidden field', });
lyr_Rt139RidershipPAx_40.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership': 'header label - always visible', });
lyr_Rt139RidershipPAx_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});