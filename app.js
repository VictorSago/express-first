const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const rootDir = require("./util/path");
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(rootDir, "public")));

app.use('/', (req, res, next) => {
  //console.log("This middleware always runs!");
  next();
});

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {pageTitle: "Pag e Not Found"});
});

app.listen(3000);
