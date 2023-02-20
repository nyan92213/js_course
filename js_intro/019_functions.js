"use strict";

function showFirstMessege(text) {
    console.log(text);
    let num = 20;
}

showFirstMessege("Hello world");

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(1, 3));
console.log(calc(6, 3));

function ret() {
    let num = 50;
    // 
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;

const discount = 0.9;

function convert(ammount, curr) {
    return curr * ammount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, 28));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);