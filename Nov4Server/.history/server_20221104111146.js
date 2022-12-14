const http =require('http');

const PORT=9997;

const requestListener = function(request,response){
    //do something with request and response
    
}
const myServer = http.createServer();

myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`);)

