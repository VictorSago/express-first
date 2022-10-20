const path = require('path');
const express = require("express");


const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //console.log("In another middleware");
  /* let rstring = "<html><head><title>Add Product</title></head>";
  rstring += "<body>";
  rstring += '<h1>The "Add Product" page</h1>';
  rstring +=
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>';
  rstring += "</body></html>"; */
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});


module.exports = router;
