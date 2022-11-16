const express = require('express');

const app =express();

//Step1
// app.post('/something',(req,res)=>{

// })

//Step2
//write body of the function
// app.post('/something',(req,res)=>{
//     res.end('some text');
// })


//Step3
// app.post('/something',(req,res)=>{

//     If res.end is not mentioned, then the browser starts hanging. Since it
//     waits for a response but doesn't get any

//     res.end('something');
// })


// app.post('/person',(req,res)=>{
//     res.end('some text');
// })
// app.get('/person',(req,res)=>{
//     res.end('some text via get');
// })


//This doesn't q
app.post('/person',(req,res)=>{
    res.send(req.body);
})


//Step4

//listen on a port

// app.listen(1234,);
//----------------------------
//Step5
//the second parameter of listen function prints in your console some text as
//soon as the server starts running on the port you mentioned.
app.listen(1222,console.log('Iam Server and Iam Copy Alive'));

