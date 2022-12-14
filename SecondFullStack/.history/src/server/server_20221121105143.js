const express = require('express');

const multer = require('multer');

const app = express();

app.post('/customer',upload.none(),(req,res)=>{

    res.json(req.body);
})

app.listen(9999,()=>console.log('alive!'));