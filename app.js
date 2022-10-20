const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  //console.log("This middleware always runs!");
  next();
});

app.use('/add-product', (req, res, next) => {
  //console.log("In another middleware");
  let rstring = "<html><head><title>Add Product</title></head>";
  rstring += "<body>";
  rstring += '<h1>The "Add Product" page</h1>';
  rstring += '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>';
  rstring += "</body></html>";
  res.send(rstring);
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  //console.log("In root middleware");
  res.send('<h1>Hellllllo from Exxxxpressssss!</h1>');
});

app.listen(3000);
