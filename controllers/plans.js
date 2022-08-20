const express = require("express")
const router = express.Router()


/// Middleware

///Routes
router.route("/")
//Index
.get((req,res) => {
    res.render("index.ejs")
})

module.exports = router