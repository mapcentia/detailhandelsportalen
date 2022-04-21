var express = require('express');
var router = express.Router();
var http = require('http');
var config = require('../../../config/config.js').gc2;
var app = require('express')();
var request = require('request');
const fs = require('fs');
const base64url = require('base64-url');

router.post('/api/extension/economydata', function(req, response){
    var db = req.body.db;
    var type = req.body.type;
    
    //console.log('------------')
    //console.log('type:', type);
    //console.log('req.body.q', req.body.q);
    //console.log('------------')
    var sqlQueryString = `SELECT * FROM detail.socio_oekomiske_noegle_tal WHERE ST_intersects(the_geom ,ST_transform(ST_geomfromtext( '${req.body.q.catchment}', 4326), 25832))`;
    //AND gc2_version_end_date IS NULL

    var host;
    try{
        host = app.address()
    }catch(err){
        host = 'http://localhost:3000'
    }
    //"?q=" + sqlQueryString + "&srs=" + srs + "&lifetime=" + lifetime + "&client_encoding=" + client_encoding + "&key=ce5ab76892183d8b68c0486f724b011d"

    test = {
        q: sqlQueryString,
        base64: false,
        srs: 4326,
        lifetime: 0,
        client_encoding: "UTF8",
        key: "ce5ab76892183d8b68c0486f724b011d"
    }
    //srs=4326&lifetime=0&client_encoding=UTF8&key=ce5ab76892183d8b68c0486f724b011d

    var postData = host+'/api/sql/'+ db;
    // fs.writeFile("/tmp/testSQL.txt", postData, function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     //console.log("The file was saved!");
    // }); 
    request({
            method: 'POST',
            body: test,
            json:true,
            url: postData,
            post: "3000"
        }, function (error, res, body) {
            //console.log('made it in here hmm', body)
        /*
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        console.log('Response:', body);
        console.log('response json', res.toJSON())
        */
        var jsonparsed;
        if(error == null){
            response.send(body);
        }else{
            response.status(500)
            response.send(error);
        }
    });

});

module.exports = router;