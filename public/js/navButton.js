const button = document.querySelector("#button-outer")
const nav = document.querySelector("nav")
let buttonBack = document.querySelector("#button-back")
let buttonClicked = false;
button.addEventListener("click", ()=>{
    // console.log(nav)
    // const newLine = document.createElement("li")
    // newLine.innerText = "test"
    // content.appendChild(newLine)
    if (!buttonClicked) {
        nav.innerHTML = `
            <div style="width: 60%;">
            
            </div>
            <div id="button-outer">
                <div id="button-inner">
                    <a class="button-clicked" href="/plan/new">+</a>
                </div>
            </div>
            <div id="button-back">
                <div id="button-inner">
                <a class="button-clicked" href="/plan">⏎</a>
                </div>
            </div>
            <div style="width: 20%;">

            </div>
        `

        buttonClicked = true
    } else {
        nav.innerHTML = `
            <div style="width: 60%;">
            
            </div>
            <div id="button-outer">
                <div id="button-inner">
                    =
                </div>
            </div>
            <div style="width: 20%;">

            </div>
        `
        buttonClicked = false
    }    
})