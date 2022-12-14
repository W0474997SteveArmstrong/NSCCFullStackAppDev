const express = require('express');
const Database = require('better-sqlite');


const db = new Database('Chinnok_Sqlite.sqlite');
const app =express();

app.post('/customer',(req,res)=>{

})

app.listen(9999,console.log("Alive!"));