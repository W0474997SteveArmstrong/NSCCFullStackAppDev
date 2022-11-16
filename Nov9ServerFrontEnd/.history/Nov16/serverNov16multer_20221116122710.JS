const express = require('express');
const multer

const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/person',(req,res)=>{
    res.send(req.body);
})
app.listen(4567,console.log('Iam Server non multi'));