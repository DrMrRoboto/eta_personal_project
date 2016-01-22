var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/personal_project_walking_skeleton');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/views/partials/login.html'));
    });

module.exports = router;