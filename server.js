var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(9527);

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/static/client.html');
});

io.sockets.on('connection', function(socket) {
	console.log('new client connected');
});
