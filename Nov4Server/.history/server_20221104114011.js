const http =require('http');

const PORT=9969;

//Method1 works

// const requestListener = function(request,response){
//     //do something with request and response
//     response.end('Hey there.');
// }
// const myServer = http.createServer(requestListener);
// myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`));




//Method 2 works

// const myServer =  http.createServer((request,response)=>{
//     response.end("Hey beautiful!")
// });

// myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`));


//Method3


const myServer =  http.createServer((request,response)=>{

    const request
    response.end("Hey beautiful!")
});

myServer.listen(PORT,()=>console.log(`I got ya on port ${PORT}`));

