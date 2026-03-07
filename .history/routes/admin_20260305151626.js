const router = require("express").Router()
const Project = require("../models/Project")

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

module.exports = router