const http =require('http');

const PORT=9970;



// const requestListener = function(request,response){
//     //do something with request and response
//     response.end('Hey there.');
// }
// const myServer = http.createServer(requestListener);


const myServer =  http.createServer(request,response)=>{
    response.end("Hey beautiful!")
}

myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`));

