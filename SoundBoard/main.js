const sounds = [
    'All aboard',
    'Aww Bitch',
    'Butthole',
    'God damn',
    'Groovey baby',
    'Hey are you doing ok',
    'International man of mystery',
    'I put the grrr in swinger',
    'Order',
    'Whats poppin',
    'Why are you gay',
    'You are gay'
]

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSounds()

        document.getElementById(sound).play()
    })

    document.body.appendChild(btn)
})

function stopSounds(){
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}

