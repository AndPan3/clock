var clock = document.getElementById("clock")
var hexp = document.getElementById("hexp")
var icon = document.getElementById("icon")
var hexphover = false

function date(){var date = new Date()
var sec = date.getSeconds()
var min = date.getMinutes()
var h = date.getHours()

if (sec.toString().length == 1) {sec = "0"+sec}
if (min.toString().length == 1) {min = "0"+min}
if (h.toString().length == 1) {h = "0"+h}

var RGB = "#" + h + min + sec;

if (hexphover === true){
    hexp.textContent = "Thanks for supporting my project!"
}else if (hexphover===false){
    hexp.textContent = RGB;
}
clock.textContent = h + ":" + min + ":" + sec;

document.body.style.backgroundColor = RGB;
document.documentElement.style.backgroundColor = RGB;

}
console.log("Thanks for using my website ^^, for more Projects check out my GitHub (AndPan3) and/or my site! www.andrejbajusic.ch")
date()
i = setInterval(date,500)

hexp.addEventListener("mouseenter",()=>{

    clearInterval(i)
    y = setInterval(date,10)

    setTimeout(() => {
        hexphover = true;;}, 250);
    clearInterval(y)
    date()
    z = setInterval(date,550)
})

hexp.addEventListener("mouseleave",()=>{
    clearInterval(z)
        setTimeout(() => {
        hexphover = false;;}, 250);
    date()
    i = setInterval(date,550)
})
