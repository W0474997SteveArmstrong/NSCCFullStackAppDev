const http = require('http');

const express = require('express');

const app = express();

app.get('/customer',(req,res)=>{
    res.send('Hey there!');
});

app.get()

app.listen(9567,()=>console.log('I am ALIVE!!'));