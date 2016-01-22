var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var path = require('path');

//mongoose.connect('mongodb://localhost/personal_project_walking_skeleton');

router.get('/groups', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/partials/groups.html'));
});

module.exports = router;