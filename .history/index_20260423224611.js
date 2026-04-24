import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import adminRoutes from "./routes/admin.js";
import apiRoutes from "./routes/api.js";

const __dirname = import.meta.dirname;

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5177",
      "http://localhost:3000",
      "https://shallu-portfolio-react.vercel.app"
      
    ]
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.redirect("/admin");
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});