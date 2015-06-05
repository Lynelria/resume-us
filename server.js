var express = require('express');
var app = express();









var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var localhost = '127.0.0.1';
//var localhost = '192.168.1.36';

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || localhost;


var server = app.listen(server_port, server_ip_address, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', server_ip_address, server_port);

});

app.use(express.static('public'));

app.use('/public', express.static('public'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/projects-cubes-lili.html');
});