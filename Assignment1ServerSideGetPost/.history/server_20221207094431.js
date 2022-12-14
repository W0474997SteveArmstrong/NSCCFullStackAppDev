const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');

const db =new Database('./db/Chinook_Sqlite.sqlite');

const app =express();
const upload = multer();

app.post('/genre',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "INSERT INTO Genre()"
});