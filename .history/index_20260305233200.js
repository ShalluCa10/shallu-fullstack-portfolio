
import express from "express";
import path from "path";
import "dotenv/config";
import api from ""
const __dirname = import.meta.dirname;

//set up Express app
const app = express();
const port = process.env.PORT || 8888 ;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/admin", require("./routes/admin"))
app.use("/api", require("./routes/api"))

app.get("/",(req,res)=>{
    res.redirect("/admin")
})
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


