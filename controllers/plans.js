const express = require("express")
const { appendFile } = require("fs")
const router = express.Router()
// Import Database here

/// Middleware

///Routes
//Index
router.get("/", (req,res) => {
    res.render("index.ejs")
})

module.exports = router