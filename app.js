const express = require("express");
const app = express();
const connect = require("./model/connectDB");
connect();
const router = express.Router();


app.set('view engine', 'html');
app.use("/api", express.urlencoded({ extended: false }), router);


app.get("/", (req, res) => {
    console.log("이곳에 도착합니다");
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("3000번 포트가 열렸습니다!");
});

// 2869, 10250, 2839