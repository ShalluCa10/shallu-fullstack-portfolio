const router = require("express").Router()
import { countDocuments, find, create, findByIdAndDelete, findById, findByIdAndUpdate } from "../models/Project"
import { countDocuments as _countDocuments, find as _find, create as _create, findByIdAndDelete as _findByIdAndDelete } from "../models/Skill"

router.get("/", async (req,res)=>{

  const projectCount = await countDocuments()
  const skillCount = await _countDocuments()

  const featuredProjects = await find({featured:true}).limit(3)

  res.render("dashboard",{
    projectCount,
    skillCount,
    featuredProjects
  })
})

/* PROJECTS */

router.get("/projects", async(req,res)=>{
 const projects = await find()
 res.render("projects",{projects})
})

router.get("/projects/add",(req,res)=>{
 res.render("addProject")
})

router.post("/projects/add", async(req,res)=>{
 await create(req.body)
 res.redirect("/admin/projects")
})

router.get("/projects/delete/:id", async(req,res)=>{
 await findByIdAndDelete(req.params.id)
 res.redirect("/admin/projects")
})
router.get("/projects/edit/:id", async (req,res)=>{

  const project = await findById(req.params.id)

  res.render("editProject", {project})

})
router.post("/projects/edit/:id", async (req,res)=>{

  const techArray = req.body.technologies
    .split(",")
    .map(t => t.trim())

  await findByIdAndUpdate(req.params.id,{
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
 const skills = await _find()
 res.render("skills",{skills})
})

router.get("/skills/add",(req,res)=>{
 res.render("addSkill")
})

router.post("/skills/add", async(req,res)=>{
 await _create(req.body)
 res.redirect("/admin/skills")
})

router.get("/skills/delete/:id", async(req,res)=>{
 await _findByIdAndDelete(req.params.id)
 res.redirect("/admin/skills")
})

export default router