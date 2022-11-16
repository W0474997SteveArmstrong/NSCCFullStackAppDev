const expresss = require('express');

const app =express();

//Step1
// app.post('/something',(req,res)=>{

// })

//Step2
//write body of the function
// app.post('/something',(req,res)=>{
//     res.end('something');
// })


//Step3
// app.post('/something',(req,res)=>{

//     If res.end is not mentioned, then the browser starts hanging. Since it
//     waits for a response but doesn't get any

//     res.end('something');
// })


app.post('/something',(req,res))

//Step4

//listen on a port

// app.listen(1234,);
//----------------------------


//Step5
//the second parameter of listen function prints in your console some text as
//soon as the server starts running on the port you mentioned.
app.listen(1234,console.log('Iam Server and Iam Alive'));

