const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const toDo_LS = "toDos"
let toDos = []

function filterFN(toDo) {
    return toDo.id === 1
}

function saveToDos() {
    localStorage.setItem(toDo_LS, JSON.stringify(toDos))
}

function deleteToDo(event) {
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li)
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    })
    toDos = cleanToDos
    saveToDos()
}

function paintToDo(text) {
    const li = document.createElement("li")
    const deleteBtn = document.createElement("button")
    const span = document.createElement("span")
    const newID = toDos.length +1

    deleteBtn.innerText = "❌"
    deleteBtn.addEventListener("click", deleteToDo)
    span.innerText = text

    li.appendChild(deleteBtn)
    li.appendChild(span)
    li.id = newID
    toDoList.appendChild(li)
    const toDoObj= {
        text : text,
        id : newID
    }
    toDos.push(toDoObj)
    saveToDos()
}

function handleSubmit(event) {
    event.preventDefault()
    const currentValue = toDoInput.value
    paintToDo(currentValue)
    toDoInput.value = ""
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(toDo_LS)
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text)
        })
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init()