const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
    res.send("성공");
})

module.exports = router;