"use strict";

// to string

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));
// при сложении со строкой всегда получается строка

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(fontSize);

// to number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof((+'5')));

// 3)
console.log(typeof(parseInt("15px", 10)));

// to boolean

// 1) false
// 0, '', null, undefined, NaN;
// Остальное - True

// 1
let switcher = null;

if (switcher) {
    console.log('working');
}

switcher = 1;

if (switcher) {
    console.log('working');
}

// 2
console.log(typeof(Boolean('5')));

// 3
console.log(typeof((!!"5")));