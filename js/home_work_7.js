"use strict";
let goods = {
	piano: {
		title: "Пианино",
		price: 3000,
		count: 25
	},
	guitar: {
		title: "Гитара",
		price: 1200,
		count: 40
	},
	drum: {
		title: "Барабаны",
		price: 2700,
		count: 12
	},
	flute: {
		title: "Флейта",
		price: 900,
		count: 50
	},
	harp: {
		title: "Арфа",
		price: 3400,
		count: 5
	}
};

console.log("Задача №1")
let getGoodsByPrice = (from, to, obj) => {
	let newObject = {};
	if (typeof (from) === "number" && typeof (to) === "number") {
		for (let element in obj) { // element выводит строку, поэтому используем квадратные скобки (2 вариант)
			if (from < obj[element].price && obj[element].price < to) {
				newObject[element] = obj[element];
			}
		}
	} else { console.log("Введено не число") }
	return newObject;
}
console.log(getGoodsByPrice(2500, 3500, goods));
console.log("")
//
console.log("Задача №2")
function getByTitle(title, countToCart, obj) {
	for (let element in obj) {
		if (obj[element].title.toLowerCase() === title.toLowerCase()) {
			console.log("Товар был найден")
			if (obj[element].count >= countToCart) {
				obj[element].count -= countToCart;
				return console.log("Данное количество товара в наличии на складе")
			} 
			return console.log("К сожалению, данного количества товара нет в наличии на складе")
		}
	}
	console.log("Товар не был найден")
}
getByTitle("АрФа", 5, goods)
console.log("")
//
console.log("Задача №3")
let books = [
	{ author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5 },
	{ author: 'Гоголь', title: 'Мертвые души', pageCount: 470 },
	{ author: 'Лермонтов', title: 'Тамань', pageCount: 190 },
	{ author: 'Гончаров', title: 'Обломов', pageCount: 610 },
	{ author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191 },
	{ author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50 },
	{ author: 'Лермонтов', title: 'Бородино', pageCount: 2 },
];
function getBooks(author, arr) {
	let newArr = [];
	for (let element of arr) {
		if (element.author.toLowerCase() === author.toLowerCase()) newArr.push(element);
	}
	return newArr;
}
console.log(getBooks("ЛерМонтОв", books));
console.log("")
//
console.log("Задача №4") // sort
function sortByParam(nameOfAttribute, arr) {
	arr.sort(function (obj1, obj2) {
	return (obj1[nameOfAttribute] > obj2[nameOfAttribute] ? 1 : -1);
	});
	return arr;
}
console.log(sortByParam("author", books));




