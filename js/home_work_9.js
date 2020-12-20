"use strict"
function generateField(n) {
	let gamefield = document.createElement("div");
	gamefield.classList.add("game-field");
	let size = 40 / n;
	for (let i = 0; i < n * n; i++) {
		let present = document.createElement("div");
		present.classList.add("present");
		present.innerHTML = "Present"
		present.style.width = present.style.height = size + "vw";
		gamefield.append(present);
	}
	document.getElementById("game-field").append(gamefield);
}
let object = {
	cat: "Кот",
	book: "Книга",
	car: "Машина"
}
function randomPresent() {
	let presents = document.querySelectorAll(".present");
	let randomPresent = presents[Math.floor(Math.random() * presents.length)];
	return randomPresent;
}

function setPrise(object) {
	let arr = [];
	for (let key in object) arr.push(key);
	for (let i = 0; i < arr.length; i++) randomPresent().setAttribute("data-prise", `${arr[i]}`)
}
let gameFieldWithPrise = document.getElementById("game-field");
gameFieldWithPrise.addEventListener("click", open);
function open(event) {
	let clickelem = event.target;
	let prise = clickelem.dataset.prise
	if (prise) {
		clickelem.classList.add("prise");
		clickelem.innerHTML = clickelem.dataset.prise;
	}
	console.log(event.target)
}
// Вызов функций
generateField(4)
setPrise(object)
