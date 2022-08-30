const { default: mongoose } = require("mongoose")

mognoose = require("mongoose")

const planSchema = new mongoose.Schema({
    date: Date,
    amount: {
        type: Number,
        required: true 
    },
    name: String,
    expense: Boolean,
    notes: String,
    userId: {
        type: String,
        required: true
    }
})

const Plan = mongoose.model("Plan", planSchema)
module.exports = Plan