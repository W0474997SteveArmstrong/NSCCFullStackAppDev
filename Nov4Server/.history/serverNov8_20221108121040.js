const require = require('express');

const app = express();

//second parameter is an arrow function.
app.get('/track',(req,res)=>
{
    res.end('bl')
})
app.listen(9999,()=>console.log("Ready!"));