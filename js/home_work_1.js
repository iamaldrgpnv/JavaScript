"use strict"
let h = 7; // Выcота
let l = 6; // Длина
let b = 4; // Ширина
let s = 2 * (l * b + l * h + b * h)
console.log("Задание 1")
console.log(`Высота: ${h}` + "см")
console.log(`Длина: ${l}` + "см")
console.log(`Ширина: ${b}` + "см")
console.log(`Площадь: ${s}` + "см2")
//
console.log("Задание 2")
let n = 31;
let sum = (Math.floor (n / 10 + n % 10));
console.log(`n: ${n}`);
console.log(`Сумма цифр двузначного числа n: ${sum}`);
//
console.log("Задание 3")
let num_1 = 16;
let num_2 = 100;
let changed_num_1 = (num_2 - num_1) + num_1;
let changed_num_2 = (num_1 - num_2) + num_2;
console.log(num_1)
console.log(num_2)
console.log(changed_num_1)
console.log(changed_num_2)
