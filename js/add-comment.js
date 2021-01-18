"use strict";

let form = document.forms.comment;

// Проверка перед отправкой на сервер
let submitBotton = form.elements.submit;
submitBotton.addEventListener("click", sendForm);
function sendForm(event) {
	event.preventDefault();
	if (true) {
		let user = form.user.value;
		let comment = form.comment.value;
		console.log(`Имя пользователя ${user}`, `Комментарий ${comment}`);
		let commentDiv = document.createElement("div");
		commentDiv.innerHTML = `
			<div class="border">
			<h2>${user}</h2>
			<div class="comment">${comment}</div>
			</div>
		`
		let section = document.querySelector(".comment-place");
		section.append(commentDiv);
	}
}