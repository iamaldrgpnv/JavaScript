"use strict";
import{Climber, Mountain, Group} from "./for_home_work_12.js";
let ivan = new Climber("Ivan", "address")
let alex = new Climber("Alex", "address")
let inna = new Climber("Inna", "address")
let elbrus = new Mountain("Elbrus", "Russia", 5642)
let arr1 = [ivan, alex, inna, alex];
let arr2 = [ivan, alex];
let arr3 = [ivan, alex];
// В первый массив специально добавил 4х альпинистов, чтобы программа вывела только 3х первых.
// Но, после добавления через push setter уже не работает, с чем это может быть связано? Или добавление альпиниста 
// происходит только через массив? Спасибо.
let firstGroup = new Group(false, arr1, elbrus);
// firstGroup.arr.push(alex);
console.log(firstGroup) 
let secondGroup = new Group(true, arr2, elbrus);
console.log(secondGroup);
let thirdGroup = new Group(true, arr3, elbrus);
console.log(thirdGroup);