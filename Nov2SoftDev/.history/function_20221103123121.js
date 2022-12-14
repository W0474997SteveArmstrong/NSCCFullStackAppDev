//create http, create server, make the server listen at a port


const http = require('http');
const PORT=9998;

let handlerFunction = function(req,res){
    res.end('Hey there');
}

let ourServer = http.createServer(handlerFunction);

ourServer.listen(PORT,() =>console.log('Listening on port','));