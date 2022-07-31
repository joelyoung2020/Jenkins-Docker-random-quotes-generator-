let jQuotes = document.getElementById("quotes")
let button = document.getElementById("newbtn")
let body = document.querySelector(".div")

let arr= [ '“Smile, because it confuses people. Smile, because it’s easier than explaining what is killing you inside.”','“What doesn’t kill you, simply makes you stranger!"', '“April sweet is coming in, let the feast of fools begin!”','“They need you right now, but when they don’t, they’ll cast you out like a leper!”', '“As you know, madness is like gravity…all it takes is a little push.”', '“Let’s put a smile on that face!”', '"The only sensible way to live in this world is without rules."']
console.log(button)
let colors = ["blue", "green", "yellow", "purple", "voilet"]




button.addEventListener("click", generat)
function generat(){
    let random = Math.floor(Math.random()* arr.length)
    jQuotes.innerText = arr[random]
    body.style.backgroundColor = colors[random]
   // document.body.style.backgroundImage =  "url(Joker-Wallpapers-3-576x1024.jpg)"
}
