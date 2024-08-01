const addButton = document.querySelector(".addBtn");

const userTodoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList")

let currentTodoCount = 0;
function addTodo() {

    //Dont add todo if input is null
    if (userTodoInput.value.trim() == "") {
        alert("Please Enter Todo");
        return;
    }

    currentTodoCount++;
    //Add todo
    const newTodo = document.createElement("div");
    newTodo.className = "todo";
    newTodo.id = `${Math.ceil((Math.random()) * 99999999)}`;
    newTodo.innerHTML = `<div class="text"><h2 class="counter">${currentTodoCount}-</h2><h3 class="mainText">${userTodoInput.value.trim()}</h3></div>`;
    newTodo.innerHTML += `<div class="buttons"><img onclick='editTodo(${newTodo.id})'class='icons editBtn' src='./Images/edit.svg'> 
    <img onclick='deleteTodo(${newTodo.id})' class='icons deleteBtn' src='./Images/close.svg'>
    </div></div>`;

    todoList.appendChild(newTodo);
    userTodoInput.value = "";


}
function deleteTodo(id) {
    //console.log(id);
    const deleteElement = document.getElementById(id);
    const elementsQueue = deleteElement.children[0].children[0].textContent;
    deleteElement.remove();
    handleQueue(elementsQueue);
    currentTodoCount--;

}

function applyTodo(id, countValue) {
    //get value of todo
    const inputText = document.getElementById(id).children[0].value;

    if (inputText == "") {
        //if inputbox is empty return 
        alert("Please Enter Todo.");
        return;
    }

    const collectionOfElement = document.getElementById(id).children;

    const val = Object.values(collectionOfElement);
    //delete all stuff in main todo div
    val.forEach(value => {
        value.remove();
    });
    //create and put back new elements
    const editedElementParagraph = document.createElement("div");
    editedElementParagraph.className = "text";
    const counter = document.createElement("h2");
    counter.className = "counter";
    counter.textContent = countValue;
    const mainText = document.createElement("h3");
    mainText.className = "mainText";
    mainText.textContent = inputText.trim();

    editedElementParagraph.appendChild(counter);
    editedElementParagraph.appendChild(mainText);

    document.getElementById(id).appendChild(editedElementParagraph);

    const buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.innerHTML = `<img onclick='editTodo(${id})'class='icons editBtn' src='./Images/edit.svg'> 
    <img onclick='deleteTodo(${id})' class='icons deleteBtn' src='./Images/close.svg'>`;
    //put buttons back as well
    document.getElementById(id).appendChild(buttons);
    document.getElementById(id).className = "todo";

    //console.log(inputText);
}
function editTodo(id) {
    editMode = true;
    let elementToEdit;
    let elementToEditText;
    const collectionOfElement = document.getElementById(id).children;
    //add onEdit class to element for css part.
    document.getElementById(id).className = "todo onEdit";
    const val = Object.values(collectionOfElement);

    //find the paragraph then assign to elementToEdit
    elementToEdit = document.getElementById(id).children[0].children[1];
    //get current values of paragraph
    elementToEditText = elementToEdit.textContent;
    let currentCounterVal = document.getElementById(id).children[0].children[0];
    let countVal = currentCounterVal.textContent;
    //console.log(elementToEdit);
    //Creating new elements
    val.forEach((value) => {
        value.remove();
    })
    const newInput = document.createElement("input");
    newInput.className = "todoEdit";
    newInput.value = elementToEditText;
    const newBtn = document.createElement("img");
    newBtn.onclick = function () { applyTodo(id, countVal) };

    newBtn.className = "icons editBtn";
    newBtn.src = "./Images/tick.svg";

    //append child input box and button
    document.getElementById(id).appendChild(newInput);
    document.getElementById(id).appendChild(newBtn);
    console.log("qwe");
}

function handleQueue(queue) {
    const todos = document.querySelector(".todoList").children;
    const val = Object.values(todos);
    val.forEach((obj) => {
        if (queue < (obj.children[0].children[0].textContent)) {

            let currentNumber = (obj.children[0].children[0].textContent.replace("-", ""));


            obj.children[0].children[0].textContent = String(currentNumber - 1) + "-";
        }

    })

}


addButton.addEventListener("click", addTodo);
