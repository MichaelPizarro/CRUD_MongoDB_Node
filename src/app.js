const express = require("express");
const app = express();
const {engine} = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

const indexRoutes = require('./routes/index.routes.js'); 
const { urlencoded } = require("express");

app.set("views", path.join(__dirname,"/views"));

//handlebars
app.engine(".hbs", engine({
    layoutDir: path.join(app.get("views"),"layouts"),
    defaultLayout: "main",
    extname: ".hbs"
}))

app.set("view engine", ".hbs");

//moddleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(indexRoutes);

//Static FIles
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app