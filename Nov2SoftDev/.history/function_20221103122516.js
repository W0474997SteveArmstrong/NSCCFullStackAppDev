const http = require('http');
const PORT=9999;

let ourServer = http.createServer();

ourServer.listen(PORT,() =>console.log('Listening on port 9999');)