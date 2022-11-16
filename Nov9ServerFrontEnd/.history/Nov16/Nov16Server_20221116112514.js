const express = require('express');

const app =express();

const multer = require('multer');


const diskStorage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null)
    }
})


//use of parser --->1) for raw json --> app.use(express.json());
//                  2) for x-www-form-urlencoded -->app.use(express.urlencoded({extended:true}));

//This helps us with parsing the body parameters we send via postman
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

//This works since we now have a parser in our code
// app.post('/person',(req,res)=>{
//     //This below line prints out the body tag we gave in our postman in the console
//     //below
//     console.log(req.body);

//     //This works
//     res.send(req.body);

//     //This also works
//     // res.send(JSON.stringify(req.body));

//     //This also works
//     // res.json(req.body);
// })
app.listen(1225,console.log('Iam Server and Iam gracefully learning'));