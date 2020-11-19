"use strict";
console.log("Задача №1")
// Вариант 1
let num = 2, i = 0, output = "", vr = "Вариант: ";
console.log(vr + "1 " + "do while");
do {
	output += num + " ";
	// console.log(num)
	i++;
	num *= 2;
} while (i < 20);
console.log(output); // Сделал через слияние строк, чтобы не было так громоздко

// Вариант: 2
console.log(vr + "2 " + "while");
num = 2, i = 0, output = "";
while (i < 20) {
	output += num + " ";
	num *= 2;
	i++;
}
console.log(output);

// Вариант: 3
console.log(vr + "3 " + "for")
num = 2, output = "";
for (i = 0; i < 20; i++) {
	output += num + " ";
	num *= 2;
}
console.log(output);
console.log(" ")


// Задача 2
console.log("Задача №2")
console.log(vr + "1 " + "for")
for (i = 90; i >= 0; i -= 5) {
	console.log(i);
}
console.log(vr + "2 " + "while");
i = 90;
while (i >= 0) {
	console.log(i)
	i -= 5;
}
console.log(vr + "3 " + "do while");
i = 90;
do {
	console.log(i)
	i -= 5;
} while (i >= 0);
console.log(" ")

// Задача 3
console.log("Задача №3");
let soap = 20, plate = 40;
output = "";
console.log(`Средство: ${soap}`);
console.log(`Тарелок: ${plate}`);
while (soap > 0 && plate > 0) {
	soap -= 0.5;
	plate -= 1;
	output += soap + ";" + " ";
}
console.log("Остаток: " + output)
if (soap > 0) {
	console.log(`Остаток моющего средства: ${soap}`);
} else if (plate > 0) {
	console.log(`Остаток тарелок: ${plate}`);
} else {
	console.log("Ура! Все тарелки теперь блестят")
}
console.log(" ")
//
console.log("Задачи на массивы")
// Задача 1
console.log("Задача №1");
let arr = [], sum = 0;
arr.length = 10;
for (let index = 0; index < arr.length; index++) {
	arr[index] = Math.floor(Math.random() * arr.length);
}

let index = Math.floor(Math.random() * arr.length);
let random_elem = arr[index];

for (let elem of arr) {
	sum += elem;
}
console.log(arr);
console.log(`Индекс элемента: ${index}` + " " + `Значение элемента ${random_elem}`);
console.log(`Сумма элементов массива: ${sum}`);
console.log(`Среднее арифметическое значение: ${sum / 10}`);
console.log(" ")
// Задача 2
console.log("Задача №2");
arr = [1, 6, 9, 4, 3, 0], sum = 0;
console.log(arr);
for (let i1 = 0; i1 < arr.length; i1++) {
	for (let i2 = 0; i2 < arr.length; i2++) {
		sum = arr[i1] + arr[i2];
		if (sum === 7) {
			console.log(`Пара чисел ${arr[i1]} (Индекс: ${i1}), ${arr[i2]} (Индекс: ${i2})`);
		}
	}
}
console.log(" ");
// Задача 3
console.log("Задача №3");
let sum_1 = 0, sum_2 = 0;
arr = [
	[23, 56, 78, 12, -900],
	[0, 0, 67, -3, 621],
	[89, 67, 12],
	[23, 56, 78, 12, -900, 89, 33, 21]
];
console.log("Массив до увеличения на 10:")
for (let elem1 of arr) {
	console.log(elem1);
	for (let elem2 of elem1) {
		sum_1 += elem2;
	}
}
console.log(`Сумма чисел до увеличения: ${sum_1}`);
console.log(" ");
sum = 0;
console.log("Массив после увеличения на 10:");
for (let i1 = 0; i1 < arr.length; i1++) { // Перебор дочерних
	for (let i2 = 0; i2 < arr[i1].length; i2++) {
		arr[i1][i2] += 10;
		sum_2 += arr[i1][i2];
	}
}
for (let elem of arr) {
	console.log(elem);
}
console.log(`Сумма чисел после увеличения: ${sum_2}`);
console.log(" ");
//
// *Дополнительная задача на циклы (без массивов):
console.log("*Дополнительная задача на циклы (без массивов):");
//
let answer;
let answer_2; // Финальный вопрос, чтобы цикл не обрывался
let number_1 = 50;
let number_2 = 50;
let min = 0;
let max = 100;
let random = Math.floor(Math.random() * max);
let guess = prompt("Загадайте число от 0 до 100 включительно\nНе волнуйтесь, бот ничего не узнает)");
guess = +guess; // Преобразование в int
if (min <= guess && guess <= max) {
	alert(`Привет, я бот Числов)\nЯ точно знаю, что вы загодали правильное число!`)
	let answer_title = prompt(`Сразу спрошу это число ${random}?`);
	if (answer_title === "ДА" && guess === random) {
		alert("С первой попытки! Какой я всё-таки крутой!\nВы можете сыграть ещё раз, чтобы насладиться моими комментариями)\nТогда обновите страницу Сtrl + R");
	} else if (answer_title === "НЕТ" && guess < 100) {
		alert("Окей, а я думал будет просто...");
		while (guess !== number_1 && answer_2 !== "ДА") {
			let answer = prompt(`Число больше ${number_1}?`)
			if (answer === "ВЫХОД" || answer === "EXIT") {
				break;
			}
			if (answer === "ДА") {
				number_1 += Math.floor(number_2 / 2);
				if(number_1 === guess) {
					alert(`Ура, ваше число ${number_1}`)
				}
				number_2 = Math.floor(number_2 / 2);
				while (number_2 === 0) {
					answer_2 = prompt(`Это число ${number_1}?`)
					if (answer_2 === "ВЫХОД" || answer_2 === "EXIT") {
						break;
					}
					if (answer_2 === "ДА") {
						alert(`Ура, ваше число ${number_1}`)
						break;
					} else if (answer_2 === "НЕТ") {
						number_1++;
					}
					console.log(number_1);
				}
				console.log(number_1);
			}
			if (answer === "НЕТ") {
				number_1 -= Math.floor(number_2 / 2);
				if(number_1 === guess) {
					alert(`Ура, ваше число ${number_1}`)
				}
				number_2 = Math.floor(number_2 / 2);
				while (number_2 === 0) {
					answer_2 = prompt(`Это число ${number_1}?`)
					if (answer_2 === "ВЫХОД" || answer_2 === "EXIT") {
						break;
					}
					if (answer_2 === "ДА") {
						alert(`Ура, ваше число ${number_1}\nКакой я умный!`)
						break;
					} else if (answer === "НЕТ") {
						number_1--;
					}
					console.log(number_1);
				}
				console.log(number_1);
			}
		}
	}
} else {
	alert("Введите число от 0 до 100 вкючительно\nИ обновите страницу");
}
