const express = require('express');
const app =express();

app.set('port',9999);

app.route('/customer')
.get((req,res)=>{
    res.send('<h1>Hello GET <h1>');
})
.post((req,res)=>{
    res.send('<h1> HELLO POST <h1>');
});

app.route('/customer/:id')
.delete((req,res)=>{
    res.send('<h1>Hello Delete <h1>');
})
.put((req,res)=>{})