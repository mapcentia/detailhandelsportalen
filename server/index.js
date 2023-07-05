var express = require('express');
var router = express.Router();
var http = require('http');
var config = require('../../../config/config.js');
var app = require('express')();
var request = require('request');
var uuid = require('uuid');
var sgMail = require('@sendgrid/mail');
var formidable = require('formidable');
const fs = require('fs');

router.post('/api/feedback', (req, res, next) => {
    console.log(req.body);

    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        console.log('fields', fields);
        console.log('files', files);

        sgMail.setApiKey(config?.extensionConfig?.detailhandelsportalen?.sgMailKey);

        let attachments = []
        if(Object.keys(files).length > 0){
            console.log('attachments found', files);
            attachments = [{
                content: fs.readFileSync(files.file.path).toString("base64"),
                filename: files.file.name,
                type: files.file.type,
                disposition: "attachment"
            }];
        }
    
        let customerMessage = `
            <p><b>${fields.name}, ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}</b></p>
            <p><b>E-mail: ${fields.email}</b></p>
            <p><b>Besked: ${fields.message}</b></p>   
        `
    
        let dhpEmail = {
            to: "dann@cowi.com",
            from: "detailhandelsportalen@cowi.com",
            subject: `Detailhandelsportalen.dk - Kontaktformular [${uuid.v4()}]`,
            html: customerMessage,
            attachments: attachments
        }
    
        let receiptFeedback = `
            <p>Hej ${fields.name}</p>
            <p>Tak for din henvendelse</p>
            <p>Du vil høre fra os hurtigst muligt <br /> <br /></p>
            <p>Med venlig hilsen</p>
            <p>Teamet bag detailhandelsportalen</p>
            <p><b>Historik</b></p>
            <p><b>${fields.name}, ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}</b></p>
            <p><b>E-mail: ${fields.email}</b></p>
            <p><b>Besked: ${fields.message}</b></p>
        `
    
        let recieptMail = {
            to: fields.email,
            from: "detailhandelsportalen@cowi.com",
            subject: `Detailhandelsportalen.dk - Kontaktformular [${uuid.v4()}]`,
            html: receiptFeedback,
            attachments: attachments
        }
        let data = [
            dhpEmail,
            recieptMail
        ]

        sgMail
        .send(data)
        .then(() => {
            res.sendStatus(200);
        }, error => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
        })
    })
})

router.post('/api/extension/detailhandel/komkode', function (req, res){
    console.log('we made it into komkode', req.body.q);


    let sql = `SELECT komkode
    FROM detail.forbrugstal_kommuner
    WHERE ST_intersects(the_geom, ST_transform(ST_geomfromtext('${Buffer.from(req.body.q, 'base64').toString('utf-8')}' , 4326), 25832))`

    console.log(sql);

    var host;
    try{
        host = app.address()
    }catch(err){
        host = 'localhost'
    }

    var postData = "q=" + sql + "&srs=4326&lifetime=0&client_encoding=UTF8&key=ce5ab76892183d8b68c0486f724b011d",
        options = {
            method: 'POST',
            host: host,
            port: "3000",
            path: '/api/sql/dhp',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded ',
                'Content-Length': postData.length
            }
        };

        var reqest = http.request(options, function (result) {
            var chunks = [];
            res.header('content-type', 'application/json');
            result.on('error', function (e) {
                console.log(e);
            });
            result.on('data', function (chunk) {
                chunks.push(chunk);
            });
            result.on("end", function () {
                jsfile = new Buffer.concat(chunks);
                res.send(jsfile);
            });
        });
        reqest.write(postData);
        reqest.end();
})

router.post('/api/extension/cowiDetail/OpenRouteServiceIsochrone', function(req, response){
    let additionalData = {
        api_key : "5b3ce3597851110001cf6248644c9e3eac8149f7ac1b860a713e1b19",
        format: "json",
    }
    //req.body.locations = JSON.parse(req.body.locations);

    /**
     * @todo Remove repetitive code
     */
//https://map.detailhandelsportalen.dk/tmp/print/pdf/ffb215d8-55bd-461e-b7ab-7d2c7b5dd834.pdf
    var postData = JSON.stringify(req.body),
        options = {
            method: 'POST',
            hostname: 'api.openrouteservice.org',
            post:443,
            path: '/v2/isochrones/driving-car',
            headers: {
                //'Content-Length': postData
            }
        };

        request({
            method: 'POST',
            url: 'https://api.openrouteservice.org/v2/isochrones/'+ req.body.profile + '?',
            body: postData,
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': "5b3ce3597851110001cf6248644c9e3eac8149f7ac1b860a713e1b19"
            }}, function (error, res, body) {
            /*
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(res.headers));
            console.log('Response:', body);
            console.log('response json', res.toJSON())
            */
            var jsonparsed;
            try {
                jsonparsed = JSON.parse(body)
                response.send(jsonparsed);
            } catch (error) {
                response.status(500)
                response.send('error')
            }
        });
})

router.post('/api/extension/detailhandel/isochrone/:db', function (req, response) {
    //console.log('currently in isochrone :db', req.body.q);
    var catchmentArea = req.body.q.catchment;
    var sqlQueryString = 
    `WITH komkoderesult AS (
        SELECT komkode
        FROM detail.kommune
        WHERE ST_intersects(the_geom, ST_transform(ST_geomfromtext('${catchmentArea}' , 4326), 25832))
        LIMIT 1
    ) ` +
    "SELECT " +
    "'500'                      AS radius, " +
    "sum(befolkning) :: INTEGER  AS antal, " +

    "sum(befolkning) * (SELECT fb_total " +
    "FROM detail.forbrugstal_kommuner " +
    "WHERE komkode = (select komkode::text from komkoderesult) " +
    "LIMIT 1):: INTEGER AS fb_total, " +

    "sum(befolkning) * (SELECT fb_dagligv " +
    "FROM detail.forbrugstal_kommuner " +
    "WHERE komkode = (select komkode::text from komkoderesult) " +
    "LIMIT 1):: INTEGER AS fb_dagligv, " +

    "sum(befolkning) * (SELECT fb_beklaed " +
    "FROM detail.forbrugstal_kommuner " +
    "WHERE komkode = (select komkode::text from komkoderesult) " +
    "LIMIT 1):: INTEGER AS fb_beklaed, " +

    "sum(befolkning) * (SELECT fb_oevrige " +
    "FROM detail.forbrugstal_kommuner " +
    "WHERE komkode = (select komkode::text from komkoderesult) " +
    "LIMIT 1):: INTEGER AS fb_oevrige, " +

    `(SELECT SUM(CAST(oms_min AS integer)) 
        FROM detail.butiksliste_samlet
        WHERE ST_intersects(the_geom ,ST_transform(ST_geomfromtext( '${catchmentArea}', 4326), 25832)) AND gc2_version_end_date IS NULL
    ) as oms_min, `+

    `(SELECT SUM(CAST(oms_maks AS integer)) 
        FROM detail.butiksliste_samlet
        WHERE ST_intersects(the_geom ,ST_transform(ST_geomfromtext( '${catchmentArea}', 4326), 25832)) AND gc2_version_end_date IS NULL
    ) as oms_maks `+

    "FROM detail.dkn_befolk_point " +
    " WHERE ST_intersects(the_geom, ST_transform(ST_geomfromtext( " +
    "'" + catchmentArea + "', 4326), 25832)) ";

    var  db = req.params.db, type = req.params.type, srs = req.body.srs, lifetime = req.body.lifetime, client_encoding = req.body.client_encoding;
    var host;
    try{
        host = app.address()
    }catch(err){
        host = 'localhost'
    }

    var postData = "q=" + sqlQueryString + "&srs=" + srs + "&lifetime=" + lifetime + "&client_encoding=" + client_encoding + "&key=ce5ab76892183d8b68c0486f724b011d",
        options = {
            method: 'POST',
            host: host,
            port: "3000",
            path: '/api/sql/' + db,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded ',
                'Content-Length': postData.length
            }
        };
    
    //console.log(sqlQueryString);

    var request = http.request(options, function (result) {
        var chunks = [];
        response.header('content-type', 'application/json');
        result.on('error', function (e) {
            console.log(e);
        });
        result.on('data', function (chunk) {
            chunks.push(chunk);
        });
        result.on("end", function () {
            jsfile = new Buffer.concat(chunks);
            response.send(jsfile);
        });
    });
    request.write(postData);
    request.end();

})

module.exports = router;
