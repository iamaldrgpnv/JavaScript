"use strict"
// Дана переменная sum (сумма покупки).
//  В зависимости от значения переменной sum рассчитать персональную скидку.
//  сумма до 1000 - скидка не предусмотрена
//  сумма от 1000 до 2000 - скидка 5%
//  сумма от 2000 до 3000 - скидка 10%
//  сумма от 3000 - скидка 10% + подарок

//Написать физическую скидку, не делать вложенный if
let sum = 0;
let sale = "Ваша скидка: ";
if (1000 <= sum && sum <= 2000) {
	sale += `5%, Итоговая сумма со скидкой: ${sum - sum * 0.05 }`;
} else if (2000 <= sum && sum <= 3000) {
	sale += `10%, Итоговая сумма со скидкой: ${sum - sum * 0.1 }`;
} else if (3000 <= sum) {
	sale += `10% + подарок, Итоговая сумма со скидкой: ${sum - sum * 0.1 }`;
} else {
	sale = "Скидка не предусмотрена";
}
console.log(sale);
//
// Даны переменные: lang, salary
// Eсли значение lang - javascript перейти к проверке salary.
// Eсли значение salary > 100000, присвоить переменной result - Приглашаем Вас на собеседование.
// Eсли меньше, присвоить переменной result - Мы перезвоним Вам в ближайшее время.
let lang, salary, result;
lang = "js";
salary = 100001;
if (lang === "javascript" || lang === "js" || lang === "JavaScript") {
	if (salary > 100000) {
		result = "Приглашаем вас на собеседование";
	}
	else {
		result = "Мы перезвоним Вам в ближайшее время";
	}
} else {
	result = "Учите JavaScript";
}
console.log(result);
//
// Дана константа month (название месяца), в зависимости от названия месяца присвоить значение переменной season:
// december, january, february  -> присвоить значение "winter"    
// march, april, may  -> присвоить значение "spring"    
// june, july, august  -> присвоить значение "summer"    
// september, october, november  -> присвоить значение "autumn"
const month = "december";
let season;
switch (month) {
	case "december":
	case "january":
	case "february":
		season = "winter";
		break;
	case "march":
	case "april":
	case "may":
		season = "spring";
		break;
	case "june":
	case "july":
	case "august":
		season = "summer";
		break;
	case "september":
	case "october":
	case "november":
		season = "autumn";
		break;
	default:
		season = "I don't understand";
}
console.log(season);
