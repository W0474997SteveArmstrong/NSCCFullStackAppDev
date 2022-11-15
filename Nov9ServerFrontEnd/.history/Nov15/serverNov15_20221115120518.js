const express =require('express');

const app = express();

app.post('/person',(req,res)=>{
    res.end('hello happy world');
})

app.get('/person',(req,res)=>{
    res.end('you must have a browser,eh?')
})