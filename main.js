
const todoList = document.querySelector(".todo-list");
const todoNr = document.querySelector(".todo-nr");
const btn = document.querySelector("#submit");
const items = todoList.children;
console.log(items)


btn.addEventListener("click", addItem);

function addItem() {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = `Item ${items.length +1}`;
    todoList.append(newItem);

    newItem.addEventListener("click", deleteItem);

}


function deleteItem(e) {
    const eachItem = e.target;
    eachItem.remove();
}