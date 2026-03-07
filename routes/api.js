import express from "express"
import Project from "../models/Project.js"
import Skill from "../models/Skill.js"

const router = express.Router()

router.get("/projects", async(req,res)=>{
 const data = await Project.find()
 res.json(data)
})

router.get("/skills", async(req,res)=>{
 const data = await Skill.find()
 res.json(data)
})

export default router