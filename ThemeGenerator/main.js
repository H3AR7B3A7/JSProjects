const btn = document.getElementById("btn")

const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")

const main = document.getElementById("main")

btn.addEventListener("click", () => {
    box1.style.background = randomColor()
    box2.style.background = randomColor()
    box3.style.background = randomColor()
    box4.style.background = randomColor()

    document.body.style.background = randomColor()
})

function randomColor(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}