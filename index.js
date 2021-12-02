const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("서버가 켜졌습니다!");
});