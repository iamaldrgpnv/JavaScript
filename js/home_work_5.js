"use strict";
// Задача 1
// 1 товар 21 товар 31 -ар; 2 3  4 -ара; 5 товаров 6 товаров 7 товаров 8 товаров 
console.log("Задача №1");
function getProduct(count) {
	if (count % 10 === 1) return count + " " + "товар";
	if (5 <= count && count <= 20) return count + " " + "товаров";
	if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) return count + " " + "товара";
	return count + " " + "товаров";
}
console.log(getProduct(0));
console.log("");
//
// Задача 2
console.log("Задача №2");
function getRange(a, b, c = 1) {
	let mas = [];
	for (a; a <= b; a += c) {
		mas.push(a);
	}
	return mas;
}
console.log(getRange(1, 10, 2));
console.log("");
//
// Задача 3
console.log("Задача №3");
function getSum(n) {
	let sum = 0;
	if(n < 1) {
		return sum;
	} else {
		sum += n % 10;
		return sum + getSum(Math.floor(n / 10));
	}
}
console.log(getSum(12345));
// function getSum(n) {
// 	let sum = 0;
// 	while(n >= 1) {
// 		sum += n % 10;
// 		n = Math.floor(n / 10)
// 	}
// 	return sum;
// }
