"use strict";
let books = [
	{ author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5, count: 10 },
	{ author: 'Гоголь', title: 'Мертвые души', pageCount: 470, count: 0 },
	{ author: 'Лермонтов', title: 'Тамань', pageCount: 190, count: 6 },
	{ author: 'Гончаров', title: 'Обломов', pageCount: 610, count: 2 },
	{ author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191, count: 17 },
	{ author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50, count: 0 },
	{ author: 'Лермонтов', title: 'Бородино', pageCount: 2, count: 5 },
];
// Вывести информацию о товаре: название, автор, количество страниц и поле вида + 0 -, 
// где 0 изначальное количество.
// Нажате на + приводит к увеличению изначального количества (но не больше значения свойства count),
// нажате на - приводит к уменьшению количества (но не меньше 0).
// Если значение свойства count равно 0, кнопки + и - должны быть неактивны.
// Реализовать возможность вводить желаемое количество с клавиаруты, при этом:
// 	 числа превышающие значение свойства count, заменяются  значением свойства count,
// 	 отрицательные числа заменяются 0.
//
function aboutBook(book) {
	let arr = [];
	for (let element in book) arr.push(book[element]); // console.log(book[element]) // value
	let mainDiv = document.getElementById("main")
	console.log(arr) // массив
	mainDiv.innerHTML = `
		<form name="book">
			<div class="border">
				<h2 name="title">Автор: ${arr[0]}</h2>
				<h2>Название: "${arr[1]}"</h2>
				<h2>Количество страниц: ${arr[2]}</h2>
			</div>
			<div class="flex">
				<input type="button" name="plus" placeholder="+">+</input>
				<input type="button" name="minus" placeholder="-">-</input>
				<input name="count" placeholder=0></input>
				<button type="submit" name="send">Купить</button>
			</div>
			
		</form>
	`
	let form = document.forms.book;
	let plus = form.elements.plus;
	let minus = form.elements.minus;
	let count = form.elements.count;
	count.addEventListener("keyup", () => {
		if(form.elements.count.value > arr[3]) {
			alert("К сожалению, книг больше нет в наличии")
			form.elements.count.value = arr[3];
		}
	})
	plus.addEventListener("click", () => {
		form.elements.count.value++;
		if(form.elements.count.value > arr[3] || arr[3] === 0){
			alert("К сожалению, книг больше нет в наличии")
			form.elements.count.value = arr[3];
		}
	})
	minus.addEventListener("click", () => {
		form.elements.count.value-- 
		if(form.elements.count.value < 0){
			alert("Значение не может быть меньше 0")
			form.elements.count.value = 0;
		}
	})
	form.elements.send.addEventListener("click", (event) => {
		event.preventDefault();
		console.log( `Колчиество купленных книг ${count.value}`);
	})
}
aboutBook(books[3]);
