const express = require("express")
const router = express.Router()
const User = require("../models/users.js")

router.get('/', (req, res) => {
    res.render("./users/login.ejs")
})

module.exports = router