let quoteBtn = document.querySelector(".btns");

quoteBtn.onclick = function(){
    console.log("button was clicked!");
    changeText();
}
function changeText() {
    // console.log("button was clicked!");
    // let newBtn = 
   quoteBtn.innerHTML = "Quote Sent";
   console.log(quoteBtn.innerHTML);
}
const btn = document.querySelector(".dark-mode-toggle");
document.querySelector("html");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    //   document.body.classList.add("dark-theme");
    document.querySelector("html").classList.add("dark");

}
btn.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");
    document.querySelector("#page-2").classList.toggle("dark");
    document.querySelector(".middle-section").classList.toggle("dark");
    document.querySelector("aside").classList.toggle("dark");
    document.querySelector("footer").classList.toggle("dark");
    document.querySelector(".dark-mode-toggle").classList.toggle("dark");


    let theme = "light";
    //   if (document.body.classList.contains("dark-theme")) {
    if (document.querySelector("body").classList.contains("dark")) {

        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});