const express = require('express');
const Database = require('better-sqlite3');
const multer = require('multer');
const upload = multer();



const db = new Database('db/Chinnok_Sqlite.sqlite');
const app =express();


app.get('/customer',upload.none(),(req,res)=>{
    //select to return all of the customers.
    //calls this from the client side to display all customers right
    //after doing your add new customers.

})

app.post('/customer',upload.none(),(req,res)=>{

    //Prepared statement goes to db and takes it. Prevents SQL Injection attacks.

    res.setHeader('Acess-Control-Allow-Origin','*');

    const sql ="INSERT INTO Customer(FirstName,LastName,Email) VALUES(?,?,?)";

    const statement = db.prepare(sql);
    statement.run([req.body.firstName,req.body.LastName,req.body.Email]);

    console.dir(req.body);
    res.end();

})

app.listen(9993,console.log("Alive and Kickin!"));

//accept incoming requests and talk to the database.

//Add button--->run add customer()--->
//server---.add customer()--->incoming form data-->put in req body