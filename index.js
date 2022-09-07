//Query selectors
let quoteBtn = document.querySelector(".btns");
let icons = document.querySelector("#ham");
let hugs = document.querySelector("#hug");

//Functions
icons.onclick = function(){
    showIcons();
}

quoteBtn.onclick = function() {
    changeText();
}

function showIcons() {
    icons.style.display = "none"
    hugs.style.display = "flex"
}
function changeText() {
   quoteBtn.innerHTML = "Sent";
   quoteBtn.className = "quotes"
}