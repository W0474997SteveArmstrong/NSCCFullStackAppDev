const http = require('http');
const fs =require('fs');
const ourServer = http.createServer((req,res)=>{

    let requestedPage = req.url;
    requestedPage = requestedPage.substring(1);

    let htmlContent = fs.readFileSync(req)
}
)