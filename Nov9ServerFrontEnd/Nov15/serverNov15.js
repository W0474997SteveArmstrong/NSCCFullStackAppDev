const express =require('express');

const app = express();



//using things are called middleware. The middleware we use is express.json()

app.use(express.json())

app.post('/person',(req,res)=>{
    console.log(req.body);
    const happinessLevel = req.body.happinessLevel;
    res.json(happinessLevel);
})

app.get('/person',(req,res)=>{
    res.end('you must have a browser,eh?')
})

app.listen(9035,()=>console.log('I LIVE!!'));