const express = require('express');
const app =express();
const router = require('./serverRoutebased');

app.use('/chinnok',router);

// app.set('port',9874);

app.route('/customer')
.get((req,res)=>{
    res.send('<h1>Hello GET from router<h1>');
})
.post((req,res)=>{
    res.send('<h1> HELLO POST from router <h1>');
});

app.route('/customer/:id')
.delete((req,res)=>{
    res.send('<h1>Hello Delete <h1>');
})
.put((req,res)=>{
    res.send('<h1>Hello Put</h1>');
})

app.listen(9873,console.log("Server you're beautiful"));