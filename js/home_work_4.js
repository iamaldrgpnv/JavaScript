"use strict";
console.log("Задача №1")
let home = "дом домик домой одомашненный", sum = 0;
home = home.split(" "); // Разделил строку на массив
// вариант с методом includes
for (let i = 0; i < home.length; i++) {
	if (home[i].includes("дом")) sum++;
}
console.log(sum)

// вариант с методом indexOf
sum = 0;
for (let i = 0; i < home.length; i++) {
	if (home[i].indexOf("дом") !== -1) sum++;
}
console.log(sum);

// вариант с for of
sum = 0;
for (let element of home) {
	if (element.includes("дом")) sum++
}
console.log(sum);
console.log("");
//
// Задача 2
console.log("Задача №2")
let word = "а роза упала на лапу Азора", answer;
let wordReverse = word.split("").reverse().join(" ").replace(/\s+/g, '').toLowerCase();
word = word.replace(/\s+/g, '').toLowerCase();
let compare = (a, b) => (a.localeCompare(b) === 0) ? answer = "Это палиндром" : answer = "Это простое слово";
console.log(compare(word, wordReverse));
console.log("")
//
// Задача 3
console.log("Задача №3");
word = "HELLO";
let firstLetter = word[0].toUpperCase();
// let changed_word = word.toLowerCase().split("").slice(1).splice(1, 0, word[0].toUpperCase()) 
// Не понимаю в чём проблема, я помню, что строка - неизменяема, создаю массив, у него удаляю первую букву, 
//добавляю H, но выходит ошибка... Не могу разобраться со slice, splice
// Поэтому всё делаю через конкатенацию
console.log(firstLetter.concat(word.toLowerCase().slice(1)))
console.log("")
// 
// Задача 4
console.log("Задача №4");
let words = "в предложении все слова разной длины", longestWord = 0, longestWordStr;
words = words.split(" "); // разбил строку на массив строк
// Вариант с for
for (let i = 0; i < words.length; i++) {
	if (words[i].length > longestWord) {
		longestWord = words[i].length;
		longestWordStr = words[i];
	}
}
console.log(longestWordStr);

// Вариант с sort
// Подскажите пожалуйста, я правильно понял сортировку? Что происходит, когда две строки одной длины? ("длины", "слова") Они встают на свои места относитеьно итерации?
function getLongestWord(str) {
	str.sort(function(a, b){ 
// 1 итерация: a(в), b(предложении); 2 итерация: a(предложении), b(все); 3 итерация: a(все), b(слова); 4 итерация: a(слова), b(разной); 5 итерация: a(разной), b(длины)
// b(предложении) - a(в) = 10 => [предложении, в]; b(все) - a(предложении) = -8 => [предложении, все, в]; b(слова) - a(все) = 2 => [предложении, слова, все, в]
// b(разной) - a(слова) = 1 => [предложении, разной, слова, все, в]; b(длины) - a(разной) = -1 => [предложении, разной, длины, слова, все, в]
		return b.length - a.length; 
	}) 
	return console.log(str[0]);
}
getLongestWord(words);

// Документация
// Если compareFunction(a, b) меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
// Если compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. 
// Если compareFunction(a, b) больше 0, сортировка поставит b по меньшему индексу, чем a.
// Функция compareFunction(a, b) должна всегда возвращать одинаковое значение для определённой пары элементов a и b. Если будут возвращаться непоследовательные результаты, порядок сортировки будет не определён.