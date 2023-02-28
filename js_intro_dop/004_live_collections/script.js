'use strict';

const boxesQuery = document.querySelectorAll('.box'); // статичная коллекция
const boxesGet = document.getElementsByClassName('box'); // отслеживает изменения в DOM дереве

console.log(boxesQuery[0].closest('.wrapper')); // если не находит, получаем null

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    // boxesGet[boxesGet.length] = div; // нет таких методов для работы, будет ошибка, напрямую добавлять элементы нельзя
}

console.log(boxesQuery); // NodeList(3) [div.box, div.box, div.box]
console.log(boxesGet); // HTMLCollection [div.box] - это и есть живая коллекция
// console.log(document.body.children);

console.log(Array.from(boxesGet)); // уже не живая коллекция, а статичный массив, не следит за DOM деревом

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log('this one');
});
