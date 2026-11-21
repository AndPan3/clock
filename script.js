var clock = document.getElementById("clock")
var hexp = document.getElementById("hexp")
var icon = document.getElementById("icon")


function date(){var date = new Date()
var sec = date.getSeconds()
var min = date.getMinutes()
var h = date.getHours()

if (sec.toString().length == 1) {sec = "0"+sec}
if (min.toString().length == 1) {min = "0"+min}
if (h.toString().length == 1) {h = "0"+h}

var RGB = "#" + h + min + sec;

hexp.textContent = RGB;
clock.textContent = h + ":" + min + ":" + sec;

document.body.style.background = RGB


}
date()
setInterval(date,1000)