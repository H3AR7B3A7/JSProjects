function createEmoticon(){
    const emoticon = document.createElement
    ('div')
    emoticon.classList.add('emoticon')

    emoticon.style.left = Math.random() * 100 + "vw"
    emoticon.style.animationDuration = Math.random() * 2 + 3 + "s"
    emoticon.innerText = ' 🍇 '

    document.body.appendChild(emoticon)

    setTimeout(() => {
        emoticon.remove();
    }, 5000)
}

setInterval(createEmoticon, 300)