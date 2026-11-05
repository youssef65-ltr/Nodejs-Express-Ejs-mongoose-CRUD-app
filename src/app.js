const express = require("express");
const connectDB = require('./config/db.js');
const expressLayouts = require('express-ejs-layouts');
const taskRoutes = require("./routes/taskRoutes.js");
const methodOverride = require("method-override");
const {connectCache} = require("./config/cache.js");

const app = express();
connectDB();
connectCache();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.set("views","src/views");
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout", "layouts/main");

app.use(express.static("public"));
app.use(methodOverride("_method"))

// Routes :
app.use(taskRoutes);

app.get("/" , (req ,res) => {
    return res.render("pages/home");
})


module.exports = app ;
