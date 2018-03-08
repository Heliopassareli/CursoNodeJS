var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('Hello World');
    res.write('<br>');
    res.write('Aulas de NodeJS');
    res.write('<br>');
    res.write('Ministrado por Thiago Porto');
    res.end();
});

server.listen(3000, function(){
    console.log('Node executando na porta 3000.');
});