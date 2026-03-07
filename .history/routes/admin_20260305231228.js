const router = require("express").Router()
const Project = require("../models/Project")
const Skill = require("../models/Skill")

router.get("/", async (req,res)=>{

  const projectCount = await Project.countDocuments()
  const skillCount = await Skill.countDocuments()

  const featuredProjects = await Project.find({featured:true}).limit(3)

  res.render("dashboard",{
    projectCount,
    skillCount,
    featuredProjects
  })
})

/* PROJECTS */

router.get("/projects", async(req,res)=>{
 const projects = await Project.find()
 res.render("projects",{projects})
})

router.get("/projects/add",(req,res)=>{
 res.render("addProject")
})

router.post("/projects/add", async(req,res)=>{
 await Project.create(req.body)
 res.redirect("/admin/projects")
})

router.get("/projects/delete/:id", async(req,res)=>{
 await Project.findByIdAndDelete(req.params.id)
 res.redirect("/admin/projects")
})
router.get("/projects/edit/:id", async (req,res)=>{

  const project = await Project.findById(req.params.id)

  res.render("editProject", {project})

})

/* SKILLS */

router.get("/skills", async(req,res)=>{
 const skills = await Skill.find()
 res.render("skills",{skills})
})

router.get("/skills/add",(req,res)=>{
 res.render("addSkill")
})

router.post("/skills/add", async(req,res)=>{
 await Skill.create(req.body)
 res.redirect("/admin/skills")
})

router.get("/skills/delete/:id", async(req,res)=>{
 await Skill.findByIdAndDelete(req.params.id)
 res.redirect("/admin/skills")
})

module.exports = router