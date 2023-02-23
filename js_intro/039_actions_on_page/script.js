"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// let i = 0;
const deleteBtn = (event) => { 
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteBtn);
    // }
}

// btn.addEventListener('click', deleteBtn);
// overlay.addEventListener('click', deleteBtn);

btns.forEach(btn => {
    btn.addEventListener('click', deleteBtn, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});
