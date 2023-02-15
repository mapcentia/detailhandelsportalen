/*
 * @author     Martin Høgh <mh@mapcentia.com>
 * @copyright  2013-2018 MapCentia ApS
 * @license    http://www.gnu.org/licenses/#AGPL  GNU AFFERO GENERAL PUBLIC LICENSE 3
 */

'use strict';

/**
 *
 * @type {*|exports|module.exports}
 */
var cloud;

/**
 *
 * @type {*|exports|module.exports}
 */
var utils;

/**
 *
 * @type {*|exports|module.exports}
 */
var backboneEvents;

/**
 *
 */
var transformPoint;

/**
 *
 * @type {string}
 */
var AHOST = "https://gc2.io";

/**
 *
 * @type {string}
 */
var ADB = "dk";

/**
 *
 */
var utmZone = require('./../../../browser/modules/utmZone');

/**
 *
 */
var proj4 = require('proj4');

/**
 *
 * @type {string}
 */
var exId = "detailhandel";

const MODULE_NAME = `detailhandelsportalen`;
let _self = false;
let state;
/**
 * REACT REQUIRE
 */


var DHPData = null;

var printModule;

/**
 *
 * @type {{set: module.exports.set, init: module.exports.init}}
 */

module.exports = {

    /**
     *
     * @param o
     * @returns {exports}
     */
    set: function (o) {
        //state = o.state;
        cloud = o.cloud;
        utils = o.utils;
        transformPoint = o.transformPoint;
        backboneEvents = o.backboneEvents;
        printModule = o.print;
        _self = this;
        return this;
    },

    init: function () {

        backboneEvents.get().on("on:customData", function (e) {
            $("#info-table").html(JSON.parse(e));
        });

        var dict = {

            "Info": {
                "da_DK": "Beregninger fra Oplande",
                "en_US": "Detailhandelsportalen information here"
            },

            "Coordinates": {
                "da_DK": "Koordinater",
                "en_US": "Coordinates"
            },

            "Choose coordinate system": {
                "da_DK": "Vælg koordinatsystem",
                "en_US": "Choose coordinate system"
            },

            "Cursor position": {
                "da_DK": "Markør position",
                "en_US": "Cursor position"
            },

            "Extent": {
                "da_DK": "Udstrækning",
                "en_US": "Extent"
            },

            "Latitude/Longitude, decimal degrees": {
                "da_DK": "Bredde/længde, decimal grader",
                "en_US": "Latitude/Longitude, decimal degrees"
            },

            "Latitude/Longitude, degrees, minutes and seconds": {
                "da_DK": "Bredde/længde, grader, minutter og sekunder",
                "en_US": " Latitude/Longitude, degrees, minutes and seconds"
            },

            "Lat": {
                "da_DK": "B",
                "en_US": " Lat"
            },

            "Lng": {
                "da_DK": "L",
                "en_US": "Lng"
            },
            "Place marker": {
                "da_DK": "Beregn opland",
                "en_US": "Place marker"
            },
            "Draw polygon": {
                "da_DK": "Tegn opland",
                "en_US": "Draw polygon"
            }
        };
        //Remove Help icon
        $("#detailhandel-content > .help-btn").remove();

        /*Add question mark icon for about*/
        $("#about-modal > .modal-header").css({display:"none"});
        $("a[data-target$='#about-modal'] > i").text("help");

        $(".leaflet-control-boxzoom").hide();
        $(".history-control").hide();
        //checkProssesion
        backboneEvents.get().trigger(`${MODULE_NAME}:ready`);
    },
    setDHPLayers: (baseLayerId) => {
        console.log("DHP setDHPLayers", baseLayerId);
    },
    getDHPLayers: () => {
        console.log("DHP getDHPLayers", DHPData);
        return DHPData;
    },

    /**
     * ### ! ###
     * Returns current module state
     */
    getState: () => { 
        console.log("DHP getstate", _self.getDHPLayers());
        return { data: _self.getDHPLayers() }; 
    },

    /**
     * ### ! ###
     * Applies provided module state
     */
    applyState: (newState) => {
        console.log("DHP applystate", newState); 
        backboneEvents.get().trigger(`${MODULE_NAME}:StateRestore`, newState.data);
        _self.setDHPLayers(newState);
    },

    StoresInAreaInfo: function(geomArray, type, amount){
        

        $.ajax({
            url:'/api/extension/cowiDetail/rivalEarnings/detail/dhp',
            method:'POST',
            data: {
                    q: geomArray,
                    srs: 4326,
                    lifetime: 0,
                    client_encoding: "UTF8",
                    key: null,
                    geomType: type,
                    geomAmount: amount
                },
            error: function(e){
                console.log('error!',e)
            }
        }).then(function(data){
            var features = [];
            data.features.forEach(element => {
                delete element.geometry;
            });
            backboneEvents.get().trigger("Detailhandel:rivals")
        });
    }, 
    createStore: function(type){
        var hit = false, isEmpty = true;
        return new geocloud.sqlStore({
            jsonp: false,
            method: "POST",
            host: "",
            db: db,
            uri: "/api/extension/cowiDetail/" + type,
            clickable: true,
            base64: false,
            id: 1,
            onLoad: function () {
                var layerObj = this;
            },
            styleMap: {
                weight: 2,
                color: '#660000',
                dashArray: '',
                fillOpacity: 0.2
            },
            onEachFeature: function (f, l) {
                if (typeof l._layers !== "undefined") {
                    l._layers[Object.keys(l._layers)[0]]._vidi_type = "query_result";
                } else {
                    l._vidi_type = "query_result";
                }
            }
        })
    }
};
