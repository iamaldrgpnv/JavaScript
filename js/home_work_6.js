"use strict";
console.log("Задача №4.1");
let numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12],
];
// Вариант с удалением и добавлением элементов
for (let i = 0; i < numsArr.length; i++) {
	numsArr[i].forEach((a) => {
		numsArr[i].shift(); // не понимаю, почему нельзя использовать numsArr[i].shift().push(a += 10)
		numsArr[i].push(a += 10); // Можно ли решить задачу используя один splice?
	})
}
console.log(numsArr);
// Вариант с map 
numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12],
];
let newArrOfOld = numsArr.map(function(arr, index, numsArr) {
	return arr.map((number) => number += 10);
})
console.log(newArrOfOld)
console.log("")
//
console.log("Задача №4.2")
numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12],
];
let newArr = [];
// Вариант с перебором массива
for (let element of numsArr) {
	element.forEach((a) => {
		if (a > 0) newArr.push(a);
	})
}
console.log(newArr);
// Вариант с filter
numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12],
];
newArr = numsArr.map(function(arr, index) {
	let result = arr.filter((number) => number > 0);
	return result;
})
console.log(newArr);
console.log("");
//
console.log("Задача №5");
let phrase = "Роза - прекрасный вИагРа цветок, который ххх дарят ВИАГРА возлюбленным хХх"
function getSpam(text, ...spam) {
	let sum = 0;
	// for (let element of text.split(" ")) if (element.includes(...spam)) sum++; Можно ли использовать подобную контрукию?
	for (let element of text.toLowerCase().split(" ")) {
		for (let spam_word of spam) {
			if (element.includes(spam_word)) sum++
		}
	}
	let levelSpam = Math.floor(sum / text.split(" ").length * 100);
	if (levelSpam < 10) return (`Количество спам-слов: ${sum}, содержание спам-слов в тексте: ${levelSpam}%, уровень 1/5`)
	if (levelSpam < 20) return (`Количество спам-слов: ${sum}, содержание спам-слов в тексте: ${levelSpam}%, уровень 2/5`)
	if (levelSpam < 30) return (`Количество спам-слов: ${sum}, содержание спам-слов в тексте: ${levelSpam}%, уровень 3/5`)
	if (levelSpam < 40) return (`Количество спам-слов: ${sum}, содержание спам-слов в тексте: ${levelSpam}%, уровень 4/5`)
	if (levelSpam < 50) return (`Количество спам-слов: ${sum}, содержание спам-слов в тексте: ${levelSpam}%, уровень 5/5`)
}
console.log(getSpam(phrase, "виагра", "ххх"));
console.log(" ")
//
console.log("Задача №6");
let more18 = (age) => (18 < age); 
let less30 = (age) => (age < 30);
let age = Math.floor(Math.random() * 100);
let arr = [more18, less30];
// function checkAge (arr, age) {
// 	let result = (arr[0](age) === true && arr[1](age) === true) ? true : false;
// 	return result;
// }
// Потренировался использовать стрелочную функцию
// VS Code просит переконвертировать стрелочную в именованную функцию
// Как лучше оформлять функцию в таких случаях? (Без разницы)
let checkAge = (arr, number) => arr[0](number) === true && arr[1](number) === true

console.log(age);
console.log(checkAge(arr, age));
