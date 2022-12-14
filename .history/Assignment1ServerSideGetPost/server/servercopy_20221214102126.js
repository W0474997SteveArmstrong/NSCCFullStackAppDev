
const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');
const cors = require('cors');
//4.Demonstrates use of the better-sqlite3 library.
const db =new Database('Assignment1ServerSideGetPost/db/Chinook_Sqlite.sqlite');
//3.Demonstrates use of the Express.js Node library.
const app =express();
//5.Demonstrates use of your choice of body parser.
const upload = multer();
const PORT =process.env.PORT || 9876



const genreRouter = express.Router();

//Mounting the router with app.use()

app.use('/genre',genreRouter);
app.use(cors());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "GET,POST"
    )
})

// 1.	Provides a POST endpoint that updates a table of the Chinook database. 
//The table cannot be the Customer table.

genreRouter.post('',upload.none(),(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        const sql = "INSERT INTO Genre(Name) VALUES (?)";
        const statement = db.prepare(sql);
        const result = statement.run([req.body.Name]);
        res.json(result);
    }
);

//2.Provides a GET endpoint that retrieves all content from a table within the Chinook database.

genreRouter.get('',(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        const sql = "SELECT * FROM Genre";
        const statement = db.prepare(sql);
        const result = statement.all();
        res.json(result);
})


genreRouter.delete('/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "DELETE FROM Genre WHERE GenreId=?";
    const statement = db.prepare(sql);
    const result = statement.run([req.params.id]);
    res.send('The Genre has been deleted as per your request');
    
});

genreRouter.put('/:id',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = `UPDATE Genre SET Name = ? WHERE GenreId= ?`;
    const statement = db.prepare(sql);
     statement.run([req.body.Name,req.params.id]);
    res.send('The Genre has been updated as per your request');
});


app.listen(PORT,()=>console.log(`Your Genre server with try catch is alive on PORT ${PORT}`));