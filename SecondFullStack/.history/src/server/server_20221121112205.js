const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');

const upload = multer();

const app = express();
const db = new Database('./src/db/Chinook_Sqlite.sqlite');

app.post('/customer',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "INSERT INTO Customers(FirstName,LastName,Email) VALUES(?,?,?)";
    const statement = db.prepare(sql);
    const result = statement.requireN();
    res.json(result);
    res.json(req.body);
});

app.get('/customer',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Customer";
    const statement = db.prepare(sql);
    const result = statement.all();

    res.json(result);

})

app.listen(9999,()=>console.log('alive is awesome!'));

//clients / browsers/ servers allow 
//client comes from the same server api is living on.--->CORS
