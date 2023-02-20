"use strict";

// const obj = new Object();

const options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log("Test")
    }
}
// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let inKey in options[key]) {
//             console.log(`Свойство ${inKey} подсвойства ${key} имеет значение ${options[key][inKey]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);

options.makeTest();

const {border, bg} = options.colors;
console.log(border);