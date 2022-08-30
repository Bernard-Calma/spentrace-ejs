const express = require("express")
const router = express.Router()
const User = require("../models/users.js")
const bcrypt = require ("bcrypt")
let registerMsg = ""
let loginMsg = ""

// Register
router.route("/register")
.get((req, res) => {
    loginMsg = ""
    res.render("./users/signup.ejs",{registerMsg})
})
// Register Button
.post((req, res) => {
    loginMsg = ""
    if (req.body.password != req.body.passwordVerify) {
        registerMsg = "Password doesn't match."
        res.render("./users/signup.ejs",{registerMsg})       
    } else {
        const salt = bcrypt.genSaltSync(10)
        req.body.username = req.body.username.toLowerCase()
        console.log(req.body)
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        User.create(req.body, (err) => {
            if (err) {
                // console.log(err)
                registerMsg = "Username is already taken."
                res.render("./users/signup.ejs",{registerMsg})
            } else {
                res.redirect("/users/login")
            }
        })       
    }

})

// Login
router.route("/login")
.get((req, res) => {
    res.render("./users/login.ejs", {loginMsg})
    loginMsg = ""
})
.post((req, res) => {
   User.findOne({username: req.body.username.toLowerCase()}, (err, userFound) => {
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
                // console.log(req.session)
            }
            
        }
    }
   })
        
        
    
})

//Sign Out
router.route("/signout")
.get((req, res) => {
    req.session.destroy()
    loginMsg = "You've been logout"
    res.redirect("/users/login")
})

module.exports = router