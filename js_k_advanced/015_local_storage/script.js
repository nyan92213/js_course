'use strict';

// localStorage.setItem('number', 5)

// console.log(localStorage.getItem('number'))

// // localStorage.removeItem('number')

// localStorage.clear()

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color')

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true)
})

// change.addEventListener('click', () => {
//     if (form.style.backgroundColor === '') {
//         localStorage.setItem('bgColor', 'red')
//         form.style.backgroundColor = 'red'
//     } else {
//         form.style.backgroundColor = ''
//         localStorage.removeItem('bgColor')
//     }
// })

// if (localStorage.getItem('bgColor')) {
//     form.style.backgroundColor = 'red'
// }

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red'
}

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg')
        form.style.backgroundColor = '#fff'
    } else {
        localStorage.setItem('bg', 'changed')
        form.style.backgroundColor = 'red'
    }
})

const persone = {
    name: 'Alex',
    age: 25
}

const serializedPerson = JSON.stringify(persone)
localStorage.setItem(persone.name, serializedPerson)

console.log(JSON.parse(localStorage.getItem(persone.name)))