const express = require('express');
const Database = require('better-sqlite3');
const multer = require('multer');


const db = new Database('Chinnok_Sqlite.sqlite');
const app =express();

app.post('/customer',upload.none(),(req,res)=>{

    console.dir(req.body);

})

app.listen(9999,console.log("Alive!"));

//accept incoming requests and talk to the database.

//Add button--->run add customer()--->
//server---.add customer()