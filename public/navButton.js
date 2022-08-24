const button = document.querySelector("#button-outer")
const content = document.querySelector(".index")
button.addEventListener("click", ()=>{
    const newLine = document.createElement("li")
    newLine.innerText = "test"
    content.appendChild(newLine)
})
