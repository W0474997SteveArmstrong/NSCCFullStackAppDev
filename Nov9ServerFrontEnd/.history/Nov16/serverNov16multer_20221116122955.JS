const express = require('express');
const multer = require('multer');

const upload = multer();
const app =express();


//upload.none() multer will try to parse out data from the form we submitted
//type=file and we will be able to upload an image
// app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/person',upload.none(),(req,res)=>{
    res.send(req.body);
})
app.listen(4568,console.log('Iam Server multi '));