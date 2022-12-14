const http = require('http');
const fs =require('fs');
// Here req is the incoming request to the http and res is the response given by
//http
const ourServer = http.createServer((req,res)=>{

    let requestedPage = req.url;
    requestedPage = requestedPage.substring(1);

    const jsonResponse = {
        name:'Steve',
        age:51,
        profession:
    }

    // use fs object to read our requested webpage
    let htmlContent = fs.readFileSync(requestedPage,'utf-8');
    console.log(requestedPage);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.setHeader('Access-control-Allow-Origin','*');

    res.end(htmlContent); //send back a requested HTML page
}
);

ourServer.listen(9999,()=>console.log("I'm listening on port 9999"));