const apiKey = "f091d4a1469f253222f287cb407fb460"
const COORDS = "coords"

const weather=document.querySelector(".js-weather")

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp
        const place = json.name
        weather.innerText = `${temperature} @ ${place}`
    })
}

function saveCoords(coordsObject) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObject))
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude, longitude
    }
    saveCoords(coordsObject)
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log(failed)
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null) {
        askForCoords()
    } else {
        const parsedCoords = JSON.parse(loadedCoords)
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}


function init() {
    loadCoords()
}
init()