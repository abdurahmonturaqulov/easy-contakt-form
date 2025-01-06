//const container = document.querySelector(".container");

//const newSquare = document.createElement("div");
//newSquare.classList.add("square");
//newSquare.style.backgroundColor = "blueviolet"
//container.prepend(newSquare);

//const newCircle = document.createElement("div");
//newCircle.classList.add("circle");
//container.prepend(newCircle)

//const circle = document.querySelectorAll(".circle");
//circle[1].after(newSquare)


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const parag = document.querySelector("p");

btn1.addEventListener("click", addNumber);
btn2.addEventListener("click", deleteNumber);


let startingNumber = 1;





function addNumber() {
  parag.innerText = startingNumber++;
}

function deleteNumber() {
  parag.innerText = --startingNumber-1;
}