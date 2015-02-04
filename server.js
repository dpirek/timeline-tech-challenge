var staticServer = require('node-static');

var file = new staticServer.Server(__dirname + '/');

var port = 8080;

require('http').createServer(function (req, res) {
	
	file.serve(req, res);
}).listen(port);

console.log('running on port: ' + port);