"use strict";
function getCats() {
	return [
		{
			"name": "Люся",
			"age": "1 год",
			"color": "трехцветная",
			"img": "https://picsum.photos/id/345/300",
			"additional_info": { "vaccinations": true, "passport": true }

		},
		{
			"name": "Том",
			"age": "3 месяца",
			"color": "белый",
			"img": "https://picsum.photos/id/345/300",
			"additional_info": { "vaccinations": false, "passport": false }
		},
		{
			"name": "Макс",
			"age": 2,
			"color": "серый",
			"img": "https://picsum.photos/id/345/300",
			"additional_info": { "vaccinations": false, "passport": true }
		},
		{
			"name": "Василий",
			"age": 3,
			"color": "черный",
			"img": "https://picsum.photos/id/345/300",
			"additional_info": { "vaccinations": true, "passport": true }
		}
	];
}
function generateCard(cards) {
	let cats = getCats();
	for (let cat in cats) {
		let card = document.createElement("div");
		card.classList.add("card")
		let title = document.createElement("div");
		title.classList.add("title")
		let name = document.createElement("div");
		name.classList.add("name");
		name.innerHTML = cats[cat].name + ",";
		let age = document.createElement("div");
		age.classList.add("age");
		age.innerHTML = cats[cat].age;
		title.append(name, age);
		let info = document.createElement("div");
		info.classList.add("info")
		let img = document.createElement("img");
		img.classList.add("cat")
		img.setAttribute("src", cats[cat].img)
		let description = document.createElement("div");
		description.classList.add("description")
		let text = document.createElement("div");
		text.classList.add("text");
		text.innerHTML = "Дополнительная информация";
		let color = document.createElement("div");
		color.classList.add("color");
		color.innerHTML = `Цвет: ${cats[cat].color}`;
		let doc = document.createElement("div");
		doc.classList.add("doc");
		doc.innerHTML = `Паспорт: ${cats[cat].additional_info.passport}`;
		let vaccinations = document.createElement("div");
		vaccinations.classList.add("vaccinations");
		vaccinations.innerHTML = `Вакцинация: ${cats[cat].additional_info.vaccinations}`;
		description.append(text, color, doc, vaccinations);
		info.append(img, description)
		card.append(title, info);
		console.log(card)
		cards.append(card);
	}
}
generateCard(document.querySelector(".generateCard"));
//
let articles = [
	{
		id: 1,
		title: "JS",
		text: "Статья про JS",
		author: "Александр"
	},
	{
		id: 2,
		title: "PHP",
		text: "Статья про PHP",
		author: "Виталий"
	},
	{
		id: 3,
		title: "Базы Данных",
		text: "Статья про Базы Данных",
		author: "Евгения"
	},
	{
		id: 4,
		title: "HTML",
		text: "Статья про HTML",
		author: "Виталий"
	}
];
let goods = [
	{
		title: "Пианино",
		price: 3000,
		count: 25
	},
	{
		title: "Гитара",
		price: 1200,
		count: 40
	},
	{
		title: "Барабаны",
		price: 2700,
		count: 12
	},
	{
		title: "Флейта",
		price: 900,
		count: 50
	},
	{
		title: "Арфа",
		price: 3400,
		count: 5
	}
];
function createTable(arr) {
	let table = document.createElement("table")
	let section = document.querySelector(".generateTable")
	let row1;
	for (let obj of arr) {
		row1 = table.insertRow(0);
		let row2 = table.insertRow(-1);
		for (let key in obj) {
			let cel1 = row1.insertCell(-1);
			cel1.innerHTML = key;
			let cel2 = row2.insertCell(-1);
			cel2.innerHTML = obj[key];
		}
	}
	for (let i = 0; i < arr.length - 1; i++) table.deleteRow(0)
	section.append(table);
}
createTable(articles);
// Зато без document.createElement("tr") :)
// Или данный вариант медленно будет работать?
