'use strict'

const person = {
    name: 'Alex',
    tel: '+76453723232',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
}

const clone = JSON.parse(JSON.stringify(person))

clone.parents.mom = 'Anna'

console.log(person)
console.log(clone)
