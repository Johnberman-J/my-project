const express = require("express");
const render = express.Router();

render.get("/", (req, res) => {
    res.render("index");
});

render.get("/register", (req, res) => {
    res.render("register");
});

render.get("/login", (req, res) => {
    res.render("login");
})

module.exports = render;