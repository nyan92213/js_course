// 'use strict'

// function func() { 
//     smth = 'string' // использование необъявленной переменной, она будет глобальной, вызванной в функции и не удалится
// }

// const someRes = getData()
// const node = document.querySelector('.class') // даже если удалить элемент, ссылка на него останется в функции, это утечка

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes
//     }
// }, 1000)

// function outer() {
//     const potentiallyHugeArray = [] // из-за замыкания остается ссылка 
//     return function inner() {
//         potentiallyHugeArray.push('hello')
//         console.log('hello')
//     }
// }

// const sayHello = outer()

function createElement() {
    const div = document.createElement('div')
    div.id = 'test'
    return div
}

const testDiv = createElement()

document.body.append(testDiv)

function deleteElement() {
    document.body.removeChild(document.getElementById('test')) // удаление только из DOM дерева, переменная testDiv осталась, ссылка осталась
}

deleteElement()