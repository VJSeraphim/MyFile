const title = document.querySelector("#title")

const clickedClass = "clicked"
const hoveredClass = "hover"
const outClass = "out"

function handleClick() {
    title.classList.toggle(clickedClass)
}

function handleMouseOver() {
    title.classList.toggle(hoveredClass)
}
function handleMouseOut() {
    title.classList.toggle(outClass)
}

function init(){
    title.addEventListener("click", handleClick)
    title.addEventListener("mouseover", handleMouseOver)
    title.addEventListener("mouseout", handleMouseOut)
}

init();