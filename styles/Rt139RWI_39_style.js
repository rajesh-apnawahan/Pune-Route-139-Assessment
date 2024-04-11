var size = 0;
var placement = 'point';

var style_Rt139RWI_39 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("rwi");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("rwi") !== null) {
        labelText = String(feature.get("rwi"));
    }
    if (value >= 0.706000 && value <= 0.730000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.730000 && value <= 0.783333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,237,237,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.783333 && value <= 0.866000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,219,219,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.866000 && value <= 0.868667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,200,200,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.868667 && value <= 0.888333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,182,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.888333 && value <= 0.925000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,164,164,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.925000 && value <= 0.935667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,146,146,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.935667 && value <= 0.943000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,128,128,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.943000 && value <= 0.947000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,109,109,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.947000 && value <= 1.022333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,91,91,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.022333 && value <= 1.103667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,73,73,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.103667 && value <= 1.191000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,55,55,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.191000 && value <= 1.419667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,36,36,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.419667 && value <= 1.551333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,18,18,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.551333 && value <= 1.586000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 18.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
