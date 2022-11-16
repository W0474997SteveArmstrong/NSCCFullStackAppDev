const express = require('express');

const app =express();

app.post('/person',(req,res)=>{
res.json('hey');
})

app.listen('4567',console.log('Iam on server'));