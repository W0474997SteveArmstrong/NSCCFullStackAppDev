const express = require('express');
const app =express();

app.set('port',9999);

app.get('/customer',(req,res)=>{
    res.end('<h1>Hello GET <h1>');
});

app.post('/customer')