const express = require('express');

const app =express();

app.use(express.urlencoded)

app.post('/person',(req,res)=>{
res.json('hey baby! Those hips dont lie');
})

app.listen('4567',console.log('Iam on server'));