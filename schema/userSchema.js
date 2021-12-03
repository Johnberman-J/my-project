const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: String,
    password: String,
});



module.exports = mongoose.model("users", userSchema);