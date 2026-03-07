const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
 title:String,
 description:String,
 tech:String,
 github:String
})

module.exports = mongoose.model("Project", projectSchema)