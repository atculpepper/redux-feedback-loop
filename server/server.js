const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const feelingRouter = require("./routes/feeling.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/

app.use("/submit", feelingRouter);
app.use("/*", (req, res) => {
  console.log("Hello!");
  res.sendStatus(200);
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
