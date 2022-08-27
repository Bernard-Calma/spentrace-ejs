const express = require("express")
const router = express.Router()
const User = require("../models/users.js")

router.get('/', (req, res) => {
    res.send("user controller works")
})

module.exports = router