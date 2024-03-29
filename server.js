const express = require("express");
const session = require("express-session")
const methodOverride = require("method-override")
const app = express();
const planController = require("./controllers/plans.js")
const userController = require("./controllers/users.js")

//Environment Variables
require("dotenv").config()
const PORT = process.env.PORT || 3001;
const mongoURI = process.env.MONGOURI
// Import Database here
const Plan = require("./models/plans.js")
const mongoose = require("mongoose")
const db = mongoose.connection
mongoose.connect(mongoURI)
db.once("open", () => {
    console.log(`Connected to MongoDB Database`)
})
db.error("error", (err) => {
    console.log({
        error: err.message,
        message: "Error connecting to database."
    })
})
//Sessions
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use("/plan",(req, res, next) => {
    res.locals.currentUser = req.session.currentUser
    console.log("Session", req.session)
    if (req.session.currentUser) {
        res.locals.authenticated = true
        next()
    } else {
        let loginMsg = "You need to login"
        res.render("./users/login.ejs", {loginMsg})  
    }
})

//MiddleWare
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

//Controllers
app.use("/plan",planController)
app.use("/users",userController)


app.get('/', (req,res) => {
    res.render("./users/login.ejs", { loginMsg: ""})
})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`)
})