const body = document.querySelector("body");

const imageNumber = 32;


function paintImage(imgNumber){
    const image = new Image()
    image.src = `images/${imgNumber+1}.png`
    image.classList.add('bgImage')
    body.prepend(image)
}

function genRandom() {
    const randomNumber = Math.floor(Math.random() * imageNumber)

    return randomNumber
}
function init() {
    const generatedNumber = genRandom()
    paintImage(generatedNumber)

}

init()