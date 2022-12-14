const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');

const upload = multer();

const app = express();

app.post('/customer',upload.none(),(req,res)=>{

    res.json(req.body);
});

app.get('/customer')

app.listen(9999,()=>console.log('alive is awesome!'));