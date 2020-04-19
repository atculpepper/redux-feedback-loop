const express = require("express");
const router = express.Router();

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(200);
});

module.exports = router;
