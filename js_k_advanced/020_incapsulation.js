'use strict'

class User {
    constructor(name, age) {
        this.name = name
        this._age = age 
    }

    #surname = 'Bezrukov'

    say() {
        console.log(`name: ${this.name} ${this.#surname}, age: ${this._age}`)
    }

    get surname() {
        return this.#surname
    }

    set surname(surname) {
        this.#surname = surname
    }

    get age() {
        return this._age
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age <110) {
            this._age = age
        } else {
            console.log('Недопустимое значение')
        }
    }
}

const ivan = new User('Ivan', 27)

console.log(ivan._age)
ivan._age = 99
console.log(ivan._age)

ivan.surname = 'Yurkov'

ivan.say()
