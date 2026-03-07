import express from "express"
import Project from "../models/Project.js"
import Skill from "../models/Skill.js"

const router = express.Router()

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

  const techArray = req.body.technologies
    ? req.body.technologies.split(",").map(t => t.trim())
    : []

  await Project.create({
    title:req.body.title,
    description:req.body.description,
    technologies:techArray,
    githubLink:req.body.githubLink,
    liveLink:req.body.liveLink,
    featured:req.body.featured ? true : false
  })

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

router.post("/projects/edit/:id", async (req,res)=>{

  const techArray = req.body.technologies
    ? req.body.technologies.split(",").map(t => t.trim())
    : []

  await Project.create({
    title:req.body.title,
    description:req.body.description,
    technologies:techArray,
    githubLink:req.body.githubLink,
    liveLink:req.body.liveLink,
    featured:req.body.featured ? true : false
  })

  res.redirect("/admin/projects")
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

export default router