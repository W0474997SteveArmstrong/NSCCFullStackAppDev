const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');
const db =new Database('Assignment1ServerSideGetPost/db/Chinook_Sqlite.sqlite');
const app =express();
const upload = multer();


    const result = statement.run([req.body.Name]);
    res.json(result);
});

app.get('/genre',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Genre";
    const statement = db.prepare(sql);
    const result = statement.all();
    res.json(result);
})

app.listen(9876,()=>console.log('Your Genre server is alive!'));