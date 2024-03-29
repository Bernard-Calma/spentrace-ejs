const express = require("express")
const router = express.Router()
const Plan = require("../models/plans")

/// Middleware

///Routes
router.route("/")
//Index
.get((req,res) => {
    Plan.find({userId: req.session.currentUser._id},(err,plans) => {
        // console.log(plans)
        if (err) {
            console.log(err)
        } else {
            // console.log(plans[0].date.toString())
            // console.log(parseInt(plans[0].date.toString().slice(8,10)) + 1)
            // console.log(plans)
            let total = 0.00;
            let runningTotal = 0.00;
            let totalIncome = 0.00;
            let totalExpense = 0.00;
            let target = 0.00;
            plans.forEach(element => {
                target = 0;
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
            res.render("index.ejs", {
                plans,
                total,
                totalExpense,
                target
            })
        }
    }).sort({date: "asc"})
})
// CREATE
.post((req,res) => {
    req.body.expense = true;
    Plan.create(req.body, (err,plan) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            // console.log(plan)
            res.redirect("/plan")
        }
    })
})
// UPDATE
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
    res.redirect("/plan/")
})
// CREATE

router.get("/new", (req,res) => {
    res.render("new.ejs",{userId: req.session.currentUser._id})
})

//DELETE

router.delete("/delete", (req, res) => {
    console.log("entered")
    Plan.deleteMany({userId: req.session.currentUser._id}, ()=>{
        res.redirect("/plan");
    })
})



// SHOW
router.route("/:id")
.get((req,res) => {
    Plan.findById(req.params.id,(err,planFound) => {
        res.render("show.ejs", {
            plan: planFound
        })
    })
})
// DELETE
.delete((req, res) => {
    Plan.findByIdAndDelete(req.params.id, () => {
        res.redirect("/plan")
    })
})

// EDIT
router.route("/:id/edit")
.get((req,res) => {
    Plan.findById(req.params.id,(err,planFound) => {
        res.render("edit.ejs", {
            plan: planFound
        })
    })
})
// UPDATE
.put((req,res) => {
    Plan.findByIdAndUpdate(req.params.id,req.body,{new:true}, (err,editedPlan) => {
        // console.log(editedPlan)
    })
    res.redirect("/plan")
})



module.exports = router