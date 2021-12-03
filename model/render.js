const express = require("express");
const app = express();
const router = express.Router();

app.set('views', __dirname + '/views');   

app.get("/register", (req, res) => {
    res.render("register");
})

module.exports = render;