const express = require('express');
const Database =require('better-sqlite3');
const db = new Database('Chinook_Sqlite.sqlite');
const app = express();

//second parameter is an arrow function.
app.get('/track',(req,res)=>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Track WHERE ";
const statement = db.prepare(sql);
const arrOutput = [];
for(const cust of statement.iterate())
{
 arrOutput.push(cust);
 }
res.end(JSON.stringify(arrOutput));
})
app.listen(9243,()=>console.log("Ready!"));