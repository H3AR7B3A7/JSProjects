const text = "🌐 Hello world!!! 🌐"

let index = 0;

function animateText(){
    document.body.innerText = text.slice(0, index);

    index++

    if(index > text.length){
        index = 0
    }
}

setInterval(animateText, 100)