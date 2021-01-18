'use strict';
// можем получить доступ к элементам через name 
// получаем либо элемент, либо коллекция
let form = document.forms.lesson; // получение form - все формы в документе
let loginInput = form.elements.login;
loginInput.value = "qwe";
let pwdInput = form.elements.pwd;
pwdInput.value = 123;
//
let colorsRadios = form.elements.color;
let fieldset = form.elements.checkbox_fieldset;
for(let radio of colorsRadios){ // коллекция из элементов формы с одинаковым именем
	radio.addEventListener("focus", changeColor)
}
function changeColor(){
	form.elements.checkbox_fieldset.style.background = this.value;
}
//
let langArr = form.elements["lang[]"];
for(let lang of langArr){
	if(lang.checked) console.log(lang.value);
}
//
let countries = form.elements.countries;
for(let elem of countries){
	if(elem.selected) console.log(elem.value)
}
//
form.addEventListener("submit", takeForm);
function takeForm(event){
	event.preventDefault();
	console.log(form.elements.login.value)
	console.log(`Пароль ${form.elements.pwd.value}`)
	let formData = new FormData(this); // вызов всей формы
	formData.append("newKey", "newValue") 
}
//
let additionallyCheckbox = form.elements.additionally;
console.log(additionallyCheckbox);
additionallyCheckbox.addEventListener("change", openIt);
function openIt(){ // Для single checkbox стоит использовать event change
	if(this.checked) form.elements.disabled.removeAttribute("disabled")
	else form.elements.disabled.setAttribute("disabled", "disabled");
}
// Лекция
// let form = document.forms.lesson;
// console.log(form);

// let loginInput = form.elements.login;
// console.log(loginInput);
// console.log(loginInput.value);
// // установим значение атрибута value 
// loginInput.value = "qwe";

// let pwdInput = form.elements.pwd;
// pwdInput.value = "123"

// let colorRadios = form.elements.color;
// console.log(colorRadios);

// for(let radio of colorRadios) {
// 	radio.addEventListener("focus", changeColor);
// }
// function changeColor() {
// 	form.elements.checkbox_fieldset.style.background = this.value;
// }

// // name = lang[] / programming-lang - такие имена записываем в [ скобках]
// let langArr = form.elements["lang[]"];
// for(let lang of langArr) {
// 	if(lang.checked) console.log(lang.value);
// }

// // name = countries выпадающий список
// // у option
// let countries = form.elements.countries;
// console.log(countries);

// for(let elem of countries) {
// 	if (elem.selected) console.log(elem.value);
// }

// // отправка формы
// form.addEventListener("submit", takeForm);
// // у события submit, как и некоторых других событий есть обработчик по умолчанию
// // отправка данных на сервер
// function takeForm(event) {
// 	event.preventDefault(); // отменяет отправку данных на сервер
// 	console.log("takeForm")
// 	console.log(this.elements.login.value);

// 	let formData = new FormData(this);

// 	this.submit();
// }