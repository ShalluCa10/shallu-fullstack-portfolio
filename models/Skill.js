import mongoose from "mongoose"

const skillSchema = new mongoose.Schema({
  name: String,
  category: String,
  level: String
})

export default mongoose.model("Skill", skillSchema)