const jwt = require("jsonwebtoken");
const userID = "Jason";

const token = jwt.sign(userID, "secretkey");

console.log(token);

const decodedID = jwt.verify(token, "secretkey");

console.log(decodedID);