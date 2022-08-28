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
    // console.log(userFound)
    if (req.body.username === "") {
        loginMsg = "Enter a valid username."
        res.redirect("/users/login")
    } else {
        if (!userFound) {
            loginMsg = "User doesn't exist."
            res.redirect("/users/login")
        } else {
            //unhash password
            if (!bcrypt.compareSync(req.body.password, userFound.password)) {
                loginMsg = "Password is incorrect."   
                res.redirect("/users/login")     
            } else {
                req.session.currentUser = userFound
                res.redirect("/plan")
                console.log(req.session)
            }
            
        }
    }
   })
        
        
    
})


module.exports = router