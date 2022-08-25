
const btnsExpense = document.querySelectorAll(".button-expense")
const btnsExpenseLeft = document.querySelectorAll(".btnExpenseLeft")
const btnsExpenseRight = document.querySelectorAll(".btnExpenseRight")
btnsExpense.forEach(btn => {
    btn.addEventListener("click",() => {
        console.log(btn.childNodes[1].style)
        if(btn.childNodes[1].style.backgroundColor === "black") {
            btn.childNodes[1].style.backgroundColor = "green"
            btn.childNodes[3].style.backgroundColor = "black"
        } else {
            btn.childNodes[1].style.backgroundColor = "black"
            btn.childNodes[3].style.backgroundColor = "red"
        }
        
    })
});