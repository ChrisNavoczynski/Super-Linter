const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.url == '/users') {
        fs.readFile('names.html', function(error, file) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(file);
            return response.end();
        });
    }    
    else if (request.url == '/json') {
        fs.readFile('names.json', function(error, file) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(file);
            return response.end();
        });
    }
    else
        response.end('Invalid Request!');

}).listen(8080); 