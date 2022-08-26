const express = require("express")
const router = express.Router()
const Plan = require("../models/plans")


/// Middleware

///Routes
router.route("/")
//Index
.get((req,res) => {
    Plan.find({},(err,plans) => {
        // console.log(plans)
        let total = 0.00;
        let runningTotal = 0.00;
        let totalIncome = 0.00;
        let totalExpense = 0.00;
        let target = 0.00;
        plans.forEach(element => {
            target = 0;
            // console.log(element.date.toString().slice(4,15))
            element.date = element.date.toString().slice(4,15)
            if (element.expense === true) {
                totalExpense += element.amount
            } else if (element.expense === false) {
                totalIncome += element.amount
            } 
            total = totalIncome - totalExpense
            if (total < 0) {
                target = Math.abs(total)
            } else {
                target = 0;
            }
            
        });
        res.render("index.ejs", {plans,total,totalExpense,target})
    })
})
.post((req,res) => {
    req.body.expense = true;
    Plan.create(req.body, (err,plan) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            console.log(plan)
            res.redirect("/plan")
        }
    })
})

.put((req,res) => {
    console.log(req.body.expense)
    if (req.body.expense === "true") {
        Plan.findByIdAndUpdate(req.body._id, {
            expense: false
        },{new:true}, (err,newExpenseVal) => {
            // console.log("Updated: " + newExpenseVal)
        })
    } else {
        // console.log("2nd If")
        Plan.findByIdAndUpdate(req.body._id, {
            expense: true
        },{new:true}, (err,newExpenseVal) => {
            // console.log("Updated: " + newExpenseVal)
        })
    }
    res.redirect("/plan")
})

router.get("/new", (req,res) => {
    res.render("new.ejs")
})

router.route("/:id")
.get((req,res) => {
    Plan.findById(req.params.id,(err,planFound) => {
        res.render("show.ejs", {
            plan: planFound
        })
    })
})

module.exports = router