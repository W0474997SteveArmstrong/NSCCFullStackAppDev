const expresss = require('express');

const app =express();

//Step1
// app.post('/something',(req,res)=>{

// })

//Step2
//write body of the function
// app.post('/something',(req,res)=>{
//     res.end('something');
// })


//Step3
app.post('/something',(req,res)=>{

    //If res.end is not mentioned, then 
    res.end('something');
})