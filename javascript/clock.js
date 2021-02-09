const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector(".js-title")

function getTime(){
    const date = new Date()
    const minute = date.getMinutes()
    const hour = date.getHours()
    const seconds = date.getSeconds()
    clockTitle.innerText = `${hour < 13 ? `AM` : `PM`} ${hour < 10 ? `0${hour}` : hour} : ${minute < 10 ? `0${minute}` : minute} : ${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    getTime()
    setInterval(getTime, 1000)
}

init()