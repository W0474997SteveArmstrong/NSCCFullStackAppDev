const express = require('express');
const app =express().RO

app.set('port',9875);

router.route('/customer')
.get((req,res)=>{
    res.send('<h1>Hello GET using router <h1>');
})
.post((req,res)=>{
    res.send('<h1> HELLO POST using router <h1>');
});

app.route('/customer/:id')
.delete((req,res)=>{
    res.send('<h1>Hello Delete <h1>');
})
.put((req,res)=>{
    res.send('<h1>Hello Put</h1>');
})

app.listen(9875,console.log("Server you beauty"));


module.exports = router;