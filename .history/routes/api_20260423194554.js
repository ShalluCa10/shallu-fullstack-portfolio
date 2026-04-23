import express from "express"
import Project from "../models/Project.js"
import Skill from "../models/Skill.js"

const router = express.Router()
router.get("/portfolio", async (req, res) => {
  try {
    const projects = await Project.find();
    const skills = await Skill.find();

    res.json({
      name: "Sameera",
      role: "Full Stack Developer",
      skills,
      projects,

    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/projects", async(req,res)=>{
 const data = await Project.find()
 res.json(data)
})

router.get("/skills", async(req,res)=>{
 const data = await Skill.find()
 res.json(data)
})

export default router