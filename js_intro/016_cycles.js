"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

for (let i = 1; i < 10; i++) {

    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log('i', i);
    for (let j = 0; j < 3; j++) {
        console.log('j', j);
    }
}

// let stars = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++){
//         stars += '*';
//     }
//     stars += '\n';
// }

// console.log(stars);

for (let i = 0; i < 3; i++) {
    console.log('i', i);
    for (let j = 0; j < 3; j++) {
        console.log('j', j);
        for (let j = 0; k < 3; k++) {
            console.log('k', k);
        }
    }
};