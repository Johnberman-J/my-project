const express = require("express");
const app = express();
const path = require("path");
const connect = require("./model/connectDB");
connect();
const render = require("./model/render");
const router = require("./routers/router");
const morgan = require("morgan");

// 이부분의 세팅은 app.js에서 처리해주면 된다. 굳이 render.js에서 처리 할 필요가 없음.
app.set("views", path.join(__dirname, "/views"));
app.set('view engine', 'ejs');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", render);
app.use("/api", router);

// app.use("요청경로", express.static("실제경로"))
// 127.0.0.1:3000/index.html  >  views/index.html 이런식으로 처리해줌 static은 정적파일은 다 처리해줌.

app.listen(3000, () => {
    console.log("3000번 포트가 열렸습니다!");
});