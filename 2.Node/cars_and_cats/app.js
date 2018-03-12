var http = require('http'),
    urls = require('./urls'),
    render = require('./render'),
    MyMath = new require('./math'),
    port = 6789;


console.log(MyMath.add(1,2));

var server = http.createServer(function (request, response){
     if(request.url in urls) {
         let path = urls[request.url];

        render(response, path.file, path.type);
    }
});

server.listen(port);
