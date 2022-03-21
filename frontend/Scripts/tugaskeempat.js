
// style body
document.body.style.backgroundImage = "url(../frontend/images/0.jpg)"
document.body.style.backgroundSize = "100%"
document.body.style.backgroundRepeat = "no-repeat"

// document.getElementsByTagName()

const header = document.getElementsByTagName('h2');
header[0].style.color = "brown"
header[0].style.backgroundColor="none"

header[1].style.color = "orange"
header[1].style.backgroundColor="none"

header[2].style.color = "brown"
header[2].style.backgroundColor="none"

//document.getElementsByClassName()

const button = document.getElementsByClassName('button');
button[0].style.color = "black"
button[0].style.backgroundColor = "brown"

button[1].style.color = "black"
button[1].style.backgroundColor = "brown"


//document.querySelector()
const p = document.querySelector(".writer").style
p.color ="brown"

//document.querySelectorAll()
const nav = document.querySelectorAll(".isi")
for(let i=0; i<nav.length; i++){
    nav[i].style.display = "inline-block"
    nav[i].style.fontSize = "22px"
    nav[i].style.color = "red"
}




