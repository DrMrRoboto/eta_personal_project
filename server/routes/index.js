var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/personal_project_walking_skeleton');

var Voter = mongoose.model('Voter', {name:String});

router.post('/add', function(request, response, next) {
    var diner = new Voter({name: request.body.name});
    diner.save(function(err) {
        if(err) console.log('vote %s', err);
        response.send(diner.toJSON());
        next();
    });
});

router.get('/voters', function(request, response, next) {
    return Voter.find({}).exec(function(err, voters) {
        if(err) throw new Error(err);
        response.send(JSON.stringify(voters));
        next();
    });
});

router.get('/', function(req, res, next) {
    //console.log('Here is a console log');
    //var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, '../public/views/partials/login'));
    //next();
});

//router.get('/', function(req, res, next) {
//    res.sendFile(path.join(__dirname, '../public/views/styles/main.css'));
//});

module.exports = router;