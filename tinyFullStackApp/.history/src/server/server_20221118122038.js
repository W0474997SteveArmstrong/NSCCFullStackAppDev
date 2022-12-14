const express = require('express');
const Database = require('better-sqlite3');
const multer = require('multer');
const upload = multer();



const db = new Database('Chinnok_Sqlite.sqlite');
const app =express();


app.post('/customer',upload.none(),(req,res)=>{

    //Prepared statement goes to db and takes it. Prevents SQL Injection attacks.

    const sql ="INSERT INTO Customers(FirstName,LastName,Email) VALUES(?,?,?)";

    const statement = db.prepare(sql);




    console.dir(req.body);
    res.end();

})

app.listen(9993,console.log("Alive and Kickin!"));

//accept incoming requests and talk to the database.

//Add button--->run add customer()--->
//server---.add customer()--->incoming form data-->put in req body