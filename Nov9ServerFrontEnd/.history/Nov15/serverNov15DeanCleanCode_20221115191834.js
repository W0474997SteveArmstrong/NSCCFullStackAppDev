
//use of parser --->1) for raw json --> app.use(express.json());
app.use(express.urlencoded({extended:true}));
//                  2) for x-www-form-urlencoded -->const express = require('express');

const app =express();

//This helps us with parsing the body parameters we send via postman
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//This works since we now have a parser in our code
app.post('/person',(req,res)=>{
    //This below line prints out the body tag we gave in our postman in the console
    //below

    console.log(req.body);

    //This works
    res.send(req.body);


    //This also works
    // res.send(JSON.stringify(req.body));

    //This also works
    // res.json(req.body);
})

//Step4
//listen on a port
// app.listen(1234,);
//----------------------------
//Step5
//the second parameter of listen function prints in your console some text as
//soon as the server starts running on the port you mentioned.
app.listen(1225,console.log('Iam Server and Iam Copy 2 Alive'));

