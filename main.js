const container = document.querySelector(".container");

const newSquare = document.createElement("div");
newSquare.classList.add("square");
newSquare.style.backgroundColor = "blueviolet"
container.prepend(newSquare);

const newCircle = document.createElement("div");
newCircle.classList.add("circle");
container.prepend(newCircle)