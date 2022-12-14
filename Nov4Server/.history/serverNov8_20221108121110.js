const express = require('express');

const app = express();

//second parameter is an arrow function.
app.get('/track',(req,res)=>
{
    res.end('blah blah')
})
app.listen(9243,()=>console.log("Ready!"));