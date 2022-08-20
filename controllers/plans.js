const express = require("express")
const router = express.Router()
const Plan = require("../models/plans.js")


/// Middleware

///Routes
router.route("/")
//Index
.get((req,res) => {
    res.render("index.ejs")
})


router.get("/new", (req,res) => {
    res.render("new.ejs")
})

module.exports = router