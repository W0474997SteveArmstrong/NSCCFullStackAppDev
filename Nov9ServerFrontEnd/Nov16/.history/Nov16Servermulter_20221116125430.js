const express = require("express");

const app = express();
 __dirname
const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: diskStorage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/person", upload.single("test"), (req, res, next) => {
  console.log(req.file);
  res.json(req.body);
});

app.get("/person", (req, res) => {
  res.end("I know you are coming from a browser");
});

app.listen(4568, console.log("Iam learning multer file now"));
