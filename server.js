const express = require("express");
const app = express();
const PORT = 3000;
const planController = require("./controllers/plans.js")

//MiddleWare
app.use(express.static("public"))

//Controllers
app.use("/plan",planController)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`)
})