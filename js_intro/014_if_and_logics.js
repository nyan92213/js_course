"use strict";

if (1) {
    console.log('Ok');
} else {
    console.log('error');
};

const num = 51;

// (num == 50) ? console.log('Ok') : console.log('error');

switch (num) {
    case 49:
        console.log('mistake');
        break;
    case 100:
        console.log('mistake');
        break;
    case 50:
        console.log('gc');
        break;
    default:
        console.log('not this time');
        break;
};

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт');
// };

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 2;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Кто-то голоден');
// };

// console.log(1 && 0);
// console.log(5 && 1);
// console.log(null && 5);
// console.log(0 && 'sdjhb')

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны');
} else {
    console.log('Кто-то голоден');
};

console.log(!0);