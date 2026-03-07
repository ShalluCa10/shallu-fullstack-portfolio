const router = require("express").Router()
const Project = require("../models/Project")
const Skill = require("../models/Skill")

router.get("/projects", async(req,res)=>{
 const data = await Project.find()
 res.json(data)
})

router.get("/skills", async(req,res)=>{
 const data = await Skill.find()
 res.json(data)
})

module.exports = router