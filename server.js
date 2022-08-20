const express = require("express");
const app = express();
const PORT = 3000;

app.get("/plan", (req,res) => {
    res.render("index.ejs")
})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`)
})