
var http = require('http');
var dt = require('./Ex2');
http.createServer(  function(req, res){
    res.writeHead(200,  {'Content-Type' : 'text/html'});
    res.end('Welcome to Node.js' + dt.myDateTime() );
} ).listen(8182);

