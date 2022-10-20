const express = require("express");


const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //console.log("In another middleware");
  let rstring = "<html><head><title>Add Product</title></head>";
  rstring += "<body>";
  rstring += '<h1>The "Add Product" page</h1>';
  rstring +=
    '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>';
  rstring += "</body></html>";
  res.send(rstring);
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});


module.exports = router;
