import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";

import adminRoutes from "./routes/admin.js";
import apiRoutes from "./routes/api.js";
import cors from "cors";
app.use(cors());

const __dirname = import.meta.dirname;

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);

app.get("/",(req,res)=>{
    res.redirect("/admin");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});