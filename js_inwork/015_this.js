'use strict'

// function showThis(a, b) {
//     console.log(this)
//     function sum() {
//         console.log(this)
//         return a + b
//     }

//     console.log(sum())
// }

// showThis(4, 5)

// // 1) обычная функция: this = window, если стоит 'use strict' - undefind

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this)
//         }
//         shout()
//     }
// }

// obj.sum()

// 2) контекст у методов объекта - сам объект

// function User(name, id) {
//     this.name = name
//     this.id = id
//     this.human = true
//     this.hello = function() {
//         console.log(`hello ${this.name}`)
//     }
// }

// let ivan = new User('Ivan', 28)

// 3) this в конструкторах и классах - новый экземпляр объекта

function sayName(surname) {
    console.log(this)
    console.log(this.name + ' ' + surname)
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith')
sayName.apply(user, ['Smith'])

function count(num) {
    return this*num
}

const double = count.bind(2)
console.log(double(2))

//4) ручная привязка this: call, apply, bind

const btn = document.querySelector('button')

btn.addEventListener('click', function() { // если вызов функции напсиан как function(), this вернет сам элемент
    this.style.backgroundColor = 'red'
})

btn.addEventListener('click', () => { // если вызов функции напсиан как => контекст вызова теряется и this будет равен undefind
    this.style.backgroundColor = 'red' // err
})

btn.addEventListener('click', (event) { // если вызов функции напсиан как function(), this вернет сам элемент
    event.target.style.backgroundColor = 'red' // отработает
})

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { // так как у стрелочной функции нет контекста вызова, она берет контекст своего родителя
            console.log(this.num)
        }
        say()
    }
}

obj.sayNumber()

const triple = a => a * 3

console.log(triple(4))

