const expresss = require('express');

const app =express();

//Step1
// app.post('/something',(req,res)=>{

// })

//Step2
//write body of the function
app.post('/something',(req,res)=>{

    res.end('something');

})