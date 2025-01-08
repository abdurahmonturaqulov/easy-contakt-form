
const todoList = document.querySelector(".todo-list");
const todoNr = document.querySelector(".todo-nr");
const btn = document.querySelector("#submit");
const items = todoList.children;


btn.addEventListener("click", addItem);

todoList.addEventListener("click", function () {
    console.log("todoList");
});

function addItem() {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = `Item ${items.length +1}`;
    todoList.append(newItem);

    newItem.addEventListener("click", deleteItem);

}


function deleteItem(e) {
    e.stopPropagation();
    const eachItem = e.target;
    eachItem.remove();
}