const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const title = document.getElementById('title')

const setDate = '1 Januari 2021'

function setTitle(){
    title.innerText = setDate
}

function countDown(){
    const newSetDate = new Date(setDate)
    const currentDate = new Date()

    const totalSeconds = (newSetDate - currentDate) / 1000

    const d = Math.floor(totalSeconds /3600 / 24)
    const h = Math.floor(totalSeconds / 3600) % 24
    const m = Math.floor(totalSeconds / 60) %60
    const s = Math.floor(totalSeconds) % 60

    days.innerHTML = d
    hours.innerHTML = formatTime(h)
    minutes.innerHTML = formatTime(m)
    seconds.innerHTML = formatTime(s)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}
setTitle()
countDown()

setInterval(countDown, 1000)