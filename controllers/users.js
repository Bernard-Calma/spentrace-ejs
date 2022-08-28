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
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    User.create(req.body, (err) => {
        if (err) {
            res.send("error")
        } else {
            res.redirect("/users/login")
        }
    })
})

// Login
let loginMsg = ""
router.route("/login")
.get((req, res) => {
    res.render("./users/login.ejs", {loginMsg})
    loginMsg = ""
})
.post((req, res) => {
   User.findOne({username: req.body.username}, (err, userFound) => {
    console.log(userFound)
    if (!userFound) {
        loginMsg = "User doesn't exist!!!"
        res.redirect("/users/login")
    } else {
        if (userFound.password === req.body.password) {
            res.redirect("/plan")
        } else {
            loginMsg = "Password is incorrect!!!"
            res.redirect("/users/login")
        }
        
    }
   })
        
        
    
})


module.exports = router