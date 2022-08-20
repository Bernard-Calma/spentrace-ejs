const express = require("express")
const router = express.Router()
const Plan = require("../models/plans.js")


/// Middleware

///Routes
router.route("/")
//Index
.get((req,res) => {
    Plan.find({},(err,plans) => {
        res.render("index.ejs", {plans})
    })
})
.post((req,res) => {
    Plan.create(req.body, (err,plan) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            console.log(plan)
            res.redirect("/plan")
        }
    })
})

router.get("/new", (req,res) => {
    res.render("new.ejs")
})

module.exports = router