const express = require("express");
const app = express();
const planController = require("./controllers/plans.js")

//Environment Variables
require("dotenv").config()
const PORT = process.env.PORT;
const mongoURI = process.env.MONGOURI

// Import Database here
const Plan = require("./models/plans.js")
const mongoose = require("mongoose")
const db = mongoose.connection
mongoose.connect(mongoURI)
db.once("open", () => {
    console.log("Connected to MongoDB")
})
db.error("error", (err) => {
    console.log(`MongoDB connected ${mongoURI}`)
})

//MiddleWare
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Controllers
app.use("/plan",planController)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`)
})