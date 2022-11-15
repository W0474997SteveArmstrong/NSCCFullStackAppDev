const express =require('express');

const app = express();



//using things are called middleware.

app.use(express)

app.post('/person',(req,res)=>{
    res.end('hello happy world');
})

app.get('/person',(req,res)=>{
    res.end('you must have a browser,eh?')
})

app.listen(9016,()=>console.log('I LIVE!!'));