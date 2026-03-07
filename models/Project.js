import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },

  description: String,

  technologies: [String],

  githubLink: String,

  liveLink: String,

  featured: {
    type:Boolean,
    default:false
  }
},{timestamps:true})

export default mongoose.model("Project", projectSchema)