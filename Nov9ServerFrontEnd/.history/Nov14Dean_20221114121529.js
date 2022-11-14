//requires and setup
const express =require('express');

const app = express();

//implementation of endpts
//GET /math1/:num1/add/:num2

app.get('/math/:num1/add/:num2',(req,res)=>{
    //do something
    console.log(req.params.num1,":",req.params.num2);
    let addNum = req.params.num1 + req.params.num2;
    console.log(`Sum of params is`,addNum);
    res.json({name:'Dean'});
    res.json()
});

//bind to port
app.listen(9012,()=>console.log('I LIVE!!'));