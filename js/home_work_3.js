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
} while(i < 20);
console.log(output); // Сделал через слияние строк, чтобы не было так громоздко

// Вариант: 2
console.log(vr + "2 " + "while");
num = 2, i = 0, output = "";
while(i < 20) {
	output += num + " ";
	num *= 2;
	i++;
}
console.log(output);

// Вариант: 3
console.log(vr + "3 " + "for")
num = 2, output = "";
for(i = 0; i < 20; i++) {
	output += num + " ";
	num *= 2;
}
console.log(output);
console.log(" ")


// Задача 2
console.log("Задача №2")
console.log(vr + "1 " + "for")
for(i = 90; i >= 0; i -= 5) {
	console.log(i);
}
console.log(vr + "2 " + "while");
i = 90;
while(i >= 0){
	console.log(i)
	i -= 5;
}
console.log(vr + "3 " + "do while");
i = 90;
do {
	console.log(i)
	i -= 5;
} while(i >= 0);
console.log(" ")

// Задача 3
console.log("Задача №3");
let soap = 20, plate = 40;
output = "";
console.log(`Средство: ${soap}`);
console.log(`Тарелок: ${plate}`);
while(soap > 0 && plate > 0) {
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
// Задача 4 
console.log("Задачи на массивы")
console.log("Задача №1");
let arr = [], sum = 0;
arr.length = 10;
for(let index = 0; index < arr.length; index++) {
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
for (let elem of arr) {
	let index = 0;
	for(let index_2 = 0; index_2 < arr.length; index_2++) {
		sum = elem + arr[index_2];
		if (sum === 7) {
			console.log(`Пара чисел: ${elem} (Индекс числа: ${index}) + ${arr[index_2]} (Индекс числа: ${index_2})`)
		} // Не понял, как вывести индекс первого числа(
	}
	index++;
}
console.log(" ");

// Задача 3
console.log("Задача №3");
sum = 0;
arr = [
	[23, 56, 78, 12, -900],
	[0, 0, 67, -3, 621],
	[89, 67, 12],
	[23, 56, 78, 12, -900, 89, 33, 21]
];
console.log("До увеличения на 10:")
for (let elem of arr) {
	console.log(elem);
}
for (let i = 0; i < arr.length; i++) {
	for(let i2 = 0; i2 < arr[i].length; i2++)
	arr[i][i2] += 10;
}
console.log("После увеличения на 10:")
for (let elem of arr) {
	console.log(elem);
}

for (let child of arr) {
	for (let elem of child) {
		sum += elem;
	}
}
console.log(`Сумма значений элементов массива: ${sum}`)

