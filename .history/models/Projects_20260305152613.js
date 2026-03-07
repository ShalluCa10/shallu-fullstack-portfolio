const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubLink: String,
  liveLink: String,
  featured: Boolean
})

module.exports = mongoose.model("Project", projectSchema)