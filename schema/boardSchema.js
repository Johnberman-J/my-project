const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const boardSchema = new mongoose.Schema({
    userID: String,
    title: String,
    contents: String,
    date: String,
    boardID: Number,
}, { collection: "", versionKey: false});

boardSchema.plugin(autoIncrement.plugin, {
    model: "boards",
    field: "boardID",
    startAt: 1,
    increment: 1,
});



module.exports = mongoose.model("boards", boardSchema);
