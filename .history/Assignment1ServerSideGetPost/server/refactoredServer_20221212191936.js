
const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');
//4.Demonstrates use of the better-sqlite3 library.
const db =new Database('Assignment1ServerSideGetPost/db/Chinook_Sqlite.sqlite');
//3.Demonstrates use of the Express.js Node library.
const app =express();
//5.Demonstrates use of your choice of body parser.
const upload = multer();
const PORT =process.env.PORT || 9876

// 1.	Provides a POST endpoint that updates a table of the Chinook database. 
//The table cannot be the Customer table.

const genreRouter = express.Router();
//Mounting the router with app.use()

app.use('/genre',genreRouter);

//2.Provides a GET endpoint that retrieves all content from a table within the Chinook database.

genreRouter.get('/genre',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Genre";
    const statement = db.prepare(sql);
    const result = statement.all();
    res.json(result);
})

app.post('/genre',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "INSERT INTO Genre(Name) VALUES (?)";
    console.dir(req.body);
    const statement = db.prepare(sql);
    const result = statement.run([req.body.Name]);
    res.status(201).json(result);
});



app.delete('/genre/:id',(req,res)=>{
    const sql = "DELETE FROM Genre WHERE GenreId=?";
    const statement = db.prepare(sql);
    const result = statement.run([req.params.id]);
    res.send('The Genre has been deleted as per your request');
    // res.status(204);
    
});

app.put('/genre/:id',(req,res)=>{
    const sql = "UPDATE Genre SET Name = ? WHERE GenreId=?";
    const statement = db.prepare(sql);
    console.log('request params is',req.params);
    const result = statement.run([req.body,req.params.id]);
    res.send('The Genre has been updated as per your request');
});


app.listen(PORT,()=>console.log(`Your Refactored Genre server is alive on PORT ${PORT}`));