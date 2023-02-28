'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
}

for (const key in user) {
    console.log(user[key])
}

const arr = ['b', 'a', 'c']
Array.prototype.someMethod = function() {}

for (const key in arr) {
    console.log(arr[key])
}

// for in перебирает свойства не обезательно по порядку

for (const key of arr) {
    console.log(key)
}

// при использовании for in мы получаем ключ, а при ипользовании for of - получаем значения сразу

// итерируемый объект - тот, который можно перебрать при помощи for of
// содержат symbol.iterator

console.dir(arr) // Symbol(Symbol.iterator): ƒ values() в прототипе означает, что объект итерируемый

const salaries = {
    john: 500,
    ivan: 1000,
    anna: 5000,
    sayHello: function() {
        console.log('hello')
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.anna,

        next() {
            if (this.current < this.last) {
                this.current += 500
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
}

const iterator = salaries[Symbol.iterator]()
console.log(iterator.next())

// for (let res of salaries) {
//     console.log(res)
// }