const express = require("express");
const methodOverride = require("method-override")
const app = express();
const planController = require("./controllers/plans.js")
const userController = require("./controllers/users.js")

//Environment Variables
require("dotenv").config()
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGOURI
// Import Database here
const Plan = require("./models/plans.js")
const mongoose = require("mongoose")
const db = mongoose.connection
mongoose.connect(mongoURI)
db.once("open", () => {
    console.log(`Connected to MongoDB ${db.host}:${db.port}`)
})
db.error("error", (err) => {
    console.log(`MongoDB connected ${db.host}:${db.port}`)
})

//MiddleWare
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

//Controllers
app.use("/plan",planController)
app.use("/users",userController)


app.get('/', (req,res) => {
    res.redirect("/users")
})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`)
})