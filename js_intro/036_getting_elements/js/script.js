'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');

// // console.log(circles);

// // for (let i = 0; i < circles.length; i++) {
// //     console.log(circles[i]);
// // };

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(element => {
//     console.log(element);
// });

// const oneHeart = document.querySelector('div');

// console.log(oneHeart);

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

const num = 250;
box.style.cssText = `background-color: blue; width: ${num}px`;

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');

// const text = document.createTextNode('here was i');

div.classList.add('black');

document.body.append(div);

// // wrapper.append(div);

// // wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2]) // old

// // circles[0].remove();
// wrapper.removeChild(hearts[1]); // old

// hearts[0].replaceWith(circles[0]);  

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "hello";

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');