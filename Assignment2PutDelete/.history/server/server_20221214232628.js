const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');
const cors = require('cors');

//3.Demonstrates use of the Express.js Node library.
const app =express();

//4.Demonstrates use of the better-sqlite3 library.
const db =new Database('./db/Chinook_Sqlite.sqlite');

//5.Demonstrates use of your choice of body parser.
const upload = multer();

const PORT =process.env.PORT || 9876


app.use(cors());
app.use(express.json());
const genreRouter = express.Router();

//Mounting the router with app.use()

app.use('/genre',genreRouter);


app.use((req,res)=>{
    res.setHeader(Access-Control-Allow-Origin,'*');
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    next();
});


genreRouter.post('',upload.none(),(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        const sql = "INSERT INTO Genre(Name) VALUES (?)";
        const statement = db.prepare(sql);
        const result = statement.run([req.body.Name]);
        res.json(result);
    }
);

//2.Provides a GET endpoint that retrieves all content from a table within the Chinook database.

genreRouter.get('',upload.none(),(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        const sql = "SELECT * FROM Genre";
        const statement = db.prepare(sql);
        const result = statement.all();
        res.json(result);
})


//1. Provides a PUT endpoint that updates a record in the Chinook database. The table cannot be the Employee table.

genreRouter.put('/:id',upload.none()(req,res)=>{
    const result = {message: "", data: "", status: false}
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = `UPDATE Genre SET Name = ? WHERE GenreId= ?`;
    const statement = db.prepare(sql);
    const statementRes =  statement.run([req.body.Name,req.params.id]);
    result.message ="'The Genre has been updated as per your request'";
    result.data = statementRes.changes;
    result.status = true;
    res.json(result);
});

//2. Provides a DELETE endpoint that deletes a row from a table within the Chinook database.

genreRouter.delete('/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "DELETE FROM Genre WHERE GenreId=?";
    const statement = db.prepare(sql);
    const result = statement.run([req.params.id]);
    res.send('The Genre has been deleted as per your request');
    
});




app.listen(PORT,()=>console.log(`Your Genre server is alive on PORT ${PORT}`));