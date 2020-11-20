"use strict";
//
// 1 товар 21 товар 31 -ар; 2 3  4 -ара; 5 товаров 6 товаров 7 товаров 8 товаров 
console.log("Задача №1");
function getProduct(count) {
	if (5 <= count && count <= 20) {
		return count + " " + "товаров"
	} else if (count % 10 === 1) {
		return count + " " + "товар";
	} else if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
		return count + " " + "товара";
	} else {
		return count + " " + "товаров";
	}
}
console.log(getProduct(0));
console.log(" ");
//
console.log("Задача №2");
function getRange(a, b, c = 1) {
	let mas = [];
	for (a; a <= b; a += c) {
		mas.push(a);
	}
	return mas;
}
console.log(getRange(1, 10, 2));
console.log(" ");
//
console.log("Задача №3");
function getSum(n) {
	let sum;
	if (sum === n) {
		return;
	} else {
		return n += getSum(n / 10);
	}
}
console.log(getSum(100));