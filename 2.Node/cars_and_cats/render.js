var  fs   = require('fs')

module.exports = function(response, file_name, content_type) {
    fs.readFile(file_name, function(errors, contents){
        
        response.writeHead(200, { 'Content-Type': content_type });
        response.write(contents);
        response.end();
    });

}