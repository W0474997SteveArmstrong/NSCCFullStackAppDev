const express = require('express');
const router = express.Router();

app.set('port',9876);

router.route('/customer')
.get((req,res)=>{
    res.send('<h1>Hello GET using router <h1>');
})
.post((req,res)=>{
    res.send('<h1> HELLO POST <h1>');
});

app.route('/customer/:id')
.delete((req,res)=>{
    res.send('<h1>Hello Delete <h1>');
})
.put((req,res)=>{
    res.send('<h1>Hello Put</h1>');
})

app.listen(9876,console.log("Server you beauty"));


module.exports = router;