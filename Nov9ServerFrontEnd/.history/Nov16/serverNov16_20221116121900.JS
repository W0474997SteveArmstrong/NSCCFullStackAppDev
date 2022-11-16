const express = require('express');

const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/person',(req,res)=>{
    res.send(req.body);
})
app.listen(1225,console.log('Iam Server and Iam gracefully learning'));