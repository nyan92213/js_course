"use strict";

const arr = [1, 23, 13, 2, 3, 4, 6, 8, 5, -8, -3];
arr.sort(comparNum);
console.log(arr);

function comparNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr)

// arr.forEach((item, i) => {
//     if (item === 3) {
//         console.log('found');
//     }
//     console.log(`${i}: ${item}, внутри массива ${arr}`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

const arr2 = [1, 23, 13, 2, 3, 4, 6, 8, 5, -8, -3, "a", ![], 'A', 2/'s'];
console.log(arr2.length)

arr2.splice(arr2.length, 0, 1, 3)

arr2.splice(1, 1, 'added', 'added', 'added')

console.log(arr2.length)

console.log(arr2)

console.log(arr2.sort(mySort))

function mySort(a, b) {
    return a - b
}

arr2.forEach((item, i) => {
    console.log(`item: ${item}, number: ${i}`)
})

console.log(new Date(0) + 0)

// ========================================================================
// подсказка
// ========================================================================


// // добавление - удаление
// push(...items) - Добавляет элементы в конец
// pop() - извлекает элемент с конца
// shift() - извлекает элемент с начала
// unshift() - Добавляет элементы в начало
// splice(pos, deleteCount, ...items) - удаляет кол-ыо элементов начиная с pos, потом в пустоту ставит items
// concat(...items) - возвращает новый массив, копирует все члены текущего массива, Добавляет к нему items

// // поиск среди элементов
// indexOf/lastIndexOf(item, pos) - ищет item начиная c pos, возвращает -1, если ничего не найдено
// includes(value) - возвращает true, если в искомом массиве есть value
// find/filter(func) - фильтрует элементы через функцию, отдает первое/все значения с которых вернется true
// findIndex() - возвращает индекс первого искомого значения

// // для преобразования
// map(func) - создает новый массив из результатов вызова func для каждого элемента
// sort(func) - сортирует массив на месте и возвращает его
// split/join - преобразует строку в массив и обратно
