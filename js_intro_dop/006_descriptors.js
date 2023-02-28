'use strict'

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
}

// writable - если true - можно изменить
// enumirable - если true - можно перечислять в циклах
// configurable - его атрибуты можно изменить

console.log(Object.getOwnPropertyDescriptor(user, 'name'))
Object.defineProperty(user, 'name', {writable: false})
console.log(Object.getOwnPropertyDescriptor(user, birthday))
// user.name = 'sgdgd' // err - user.name - read only

Object.defineProperty(user, 'gender', {value: 'male'})

console.log(Object.getOwnPropertyDescriptor(user, 'gender'))

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true})

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
Object.defineProperty(user, 'showMyPublicData', {enumerable: false})

for (let key in user) console.log(key)

//то же самое, что выше, только сразу несколько
Object.defineProperty(user, 'showMyPublicData', {enumerable: false})
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

