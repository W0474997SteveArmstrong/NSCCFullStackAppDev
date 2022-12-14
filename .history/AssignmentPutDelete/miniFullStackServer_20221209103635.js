const express = require("express");
const app = express();
const Database = require("better-sqlite3");
const db = new Database("Chinook_Sqlite.sqlite");
const multer = require("multer");
const data = multer();

app.listen(3000,()=>console.log(););

app.use(express.text());
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/miniFullStack.html");
});

// --- READ ARTIST ---
app.get("/artist", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const sql = "SELECT * FROM Artist ORDER BY ArtistId DESC";
  const statement = db.prepare(sql);
  const result = statement.all();
  res.json(result);
});

// --- READ ARTIST BASED ON SEARCH RESULT---
app.get("/artist/:search", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const sql = "SELECT * FROM Artist WHERE Name LIKE ? ORDER BY Name";
  const statement = db.prepare(sql);
  const result = statement.all([`${req.params.search}%`]);
  res.json(result);
});

// --- ADD ARTIST ---
app.post("/artist/add", data.none(), (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const formData = req.body;
    const sql = "INSERT INTO Artist(Name) VALUES(?)";
    const statement = db.prepare(sql);
    statement.run([formData.addArtist]);
    res.send("The artist is added!");
  } catch {
    res.send("Something's wrong. Please try again.");
  }
});

app
  .route("/artist/:id")
  // --- UPDATE ARTIST ---
  .put((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      // First do a SELECT to see if the text is actually edited, then do an UPDATE only if the text has been edited
      const selectSQL = "SELECT Name FROM Artist WHERE ArtistId = ?";
      const selectStatement = db.prepare(selectSQL);
      const selectResult = selectStatement.all([req.params.id]);
      if (selectResult[0].Name === req.body) {
        res.end();
      } else {
        const updateSQL = "UPDATE Artist SET Name = ? WHERE ArtistId = ?";
        const updateStatement = db.prepare(updateSQL);
        updateStatement.run([req.body, req.params.id]);
        res.send("The artist is updated!");
      }
    } catch {
      res.send("Something's wrong. Please try again.");
    }
  })
  // --- DELETE ARTIST ---
  .delete((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      const sql = "DELETE FROM Artist WHERE ArtistId = ?";
      const statement = db.prepare(sql);
      statement.run([req.params.id]);
      res.send("This artist is deleted!");
    } catch {
      res.send("Something's wrong. Please try again.");
    }
  });
