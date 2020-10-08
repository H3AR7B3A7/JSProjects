const imgs = document.getElementById('imgs')
const carousel = document.querySelectorAll('#imgs img')

let i = 0;

function rotateCarousel(){
    i++;

    if(i > carousel.length - 1){
        i = 0
    }

    imgs.style.transform = `translateX(${-i * 800}px)`
}

setInterval(rotateCarousel, 5000)