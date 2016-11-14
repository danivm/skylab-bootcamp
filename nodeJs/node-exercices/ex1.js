var http = require('http');
var server = http.createServer();
var port = process.argv[2]

server.on("request", function (req, res) {
    res.end("Success, i'm listening from port: " + port);
});

server.listen(port);