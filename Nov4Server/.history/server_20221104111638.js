const http =require('http');

const PORT=9970;

//Method1 works

// const requestListener = function(request,response){
//     //do something with request and response
//     response.end('Hey there.');
// }
// const myServer = http.createServer(requestListener);
// myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`));

const myServer =  http.createServer(request,response)=>{
    response.end("Hey beautiful!")
}

myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`));

