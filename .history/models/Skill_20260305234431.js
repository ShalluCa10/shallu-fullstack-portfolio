import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubLink: String,
  liveLink: String,
  featured: Boolean
})

export default mongoose.model("Project", projectSchema)