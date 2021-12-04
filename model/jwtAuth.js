const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        const [type, encodedToken] = token.split(" ");  
        const userID = jwt.verify(encodedToken, "secret-key");
        res.locals = userID;
        next();
    } catch(error) {
        res.status(401).send({ err: "사용자 정보가 유효하지 않습니다!"});
        return;
    }   
}