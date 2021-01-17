const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.method == 'GET' && request.url == '/users') {
        let requestGet = request.method;
        console.log(requestGet);

        fs.readFile('names.html', function(error, file) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(file);
            return response.end();
        });
    }    
    else if (request.method == 'POST') {
        response.writeHead(200, {
          'Content-Type': 'application/json'});

        let post = request.method;
        console.log(post);
        fs.readFile('names.json', function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Invalid Request!');
            } else {
               response.write(data);
            }
            return response.end();
        });
    }
    else
        response.end('Invalid Request!');

}).listen(8080); 