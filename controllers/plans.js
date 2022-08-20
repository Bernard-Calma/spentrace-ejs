const express = require("express")
const router = express.Router()
// Import Database here
const mongoose = require("mongoose")
const db = mongoose.connection
const mongoURI = "mongodb://127.0.0.1:27017/fruits"
mongoose.connect(mongoURI)
db.once("open", () => {
    console.log("Connected to MongoDB")
})
db.error("error", (err) => {
    console.log(`MongoDB connected ${mongoURI}`)
})


/// Middleware

///Routes
router.route("/")
//Index
.get((req,res) => {
    res.render("index.ejs")
})

module.exports = router