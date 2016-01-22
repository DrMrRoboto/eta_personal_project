var express = require('express');
var app = express();
var login = require('./routes/login');
var groups = require('./routes/groups');

//var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
//app.use(express.static(__dirname + '/public'));

//app.use(express.static(path.join(__dirname, './server/public')));


var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.use(bodyParser.json());
app.use('/', login);
app.use('/groups', groups);

module.exports = app;
