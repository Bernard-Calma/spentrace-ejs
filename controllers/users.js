const express = require("express")
const router = express.Router()
const User = require("../models/users.js")
const bcrypt = require ("bcrypt")

// Register
router.route("/register")
.get((req, res) => {
    res.render("./users/signup.ejs")
})
// Register Button
.post((req, res) => {
    User.create(req.body, (err) => {
        if (err) {
            res.send("error")
        } else {
            res.redirect("/users/login")
        }
    })
})

// Login
router.route("/login")
.get((req, res) => {
    res.render("./users/login.ejs")
})
.post((req, res) => {
   User.findOne({username: req.body.username}, (err, userFound) => {
    console.log(userFound)
    if (!userFound) {
        res.send("User doesn't exist")
    } else {
        res.redirect("/plan")
    }
   })
        
        
    
})


module.exports = router