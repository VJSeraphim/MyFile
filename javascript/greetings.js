const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greetings = document.querySelector(".js-greetings")

const userLS = "currentUser"
const showingCN = "showing"

function askForName() {
    form.classList.add(showingCN)
    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

function paintGreeting(text) {
    form.classList.remove(showingCN)
    greetings.classList.add(showingCN)
    greetings.innerText = `Hello, ${text}`
}

function saveName(text) {
    localStorage.setItem(userLS, text)
}

function loadName() {
    const currentUser = localStorage.getItem(userLS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();

}

init()