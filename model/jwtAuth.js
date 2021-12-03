const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    console.log("이곳을 지나서");
    next();
}