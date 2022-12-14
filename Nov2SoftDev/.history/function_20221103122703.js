//create http, create server, make the server listen at a port


const http = require('http');
const PORT=9999;

let handlerFunction = function(req,res);

let ourServer = http.createServer();

ourServer.listen(PORT,() =>console.log('Listening on port 9999'));