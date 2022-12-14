const http =require('http');

const PORT=9997;

const myServer = http.createServer();

myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`);)

