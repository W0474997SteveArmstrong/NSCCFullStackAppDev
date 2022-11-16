const express = require('express');

const app =express();
//use of parser --->1) for raw json --> app.use(express.json());
//                  2) for x-www-form-urlencoded -->app.use(express.urlencoded({extended:true}));

//This helps us with parsing the body parameters we send via postman
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/person',(req,res)=>{
    res.send(req.body);
})
app.listen(1225,console.log('Iam Server and Iam gracefully learning'));