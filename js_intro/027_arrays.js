"use strict";

const arr = [1, 23, 13, 2, 3, 4, 6, 8, 5];
arr.sort(comparNum);
console.log(arr);

function comparNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr)

// arr.forEach(function(item, i, arr) {
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

