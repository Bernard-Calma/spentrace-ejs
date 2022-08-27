const button = document.querySelector("#button-outer")
const nav = document.querySelector("nav")
let buttonBack = document.querySelector("#button-back")
let buttonClicked = false;
// console.log(document.URL.includes("/plan/"))
// console.log(!document.URL.includes("/plan/new"))
//if url doesn't show index and add route
if (document.URL.includes("/plan/") && !document.URL.includes("/plan/new")) {
    button.addEventListener("click", ()=>{
        // console.log(nav)
        // const newLine = document.createElement("li")
        // newLine.innerText = "test"
        // content.appendChild(newLine)

        if (!buttonClicked) {
            nav.innerHTML = `
                <div id="button-outer">
                    <div id="button-inner">
                        <a class="button-clicked" href="${document.URL}/edit">✎</a>
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
} else {
    button.addEventListener("click", ()=>{
        // console.log(nav)
        // const newLine = document.createElement("li")
        // newLine.innerText = "test"
        // content.appendChild(newLine)
        if (!buttonClicked) {
            nav.innerHTML = `
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
}
