const require = require('express');

const app = express();

//second parameter is an arrow function.
app.get('/track',(req,res)=>
{
    res.end('blah blah')
})
app.listen(92,()=>console.log("Ready!"));