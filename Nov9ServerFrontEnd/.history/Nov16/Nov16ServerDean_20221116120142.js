const express = require('express');

const app =express();

app.post('/person',(req,res)=>{
res.json('hey baby! Those hips don't lie');
})

app.listen('4567',console.log('Iam on server'));