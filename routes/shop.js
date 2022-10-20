const path = require("path");
const express = require("express");


const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //console.log("In root middleware");
  //res.send("<h1>Hellllllo from Exxxxpressssss!</h1>");
  res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
});


module.exports = router;
