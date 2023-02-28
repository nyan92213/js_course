'use strict'

// const now = new Date('2023-02-28')
// const now = new Date(2023, 2, 28, 20)
// const now = new Date(0)
// const now = new Date(-48398574587)

const now = new Date('2023-03-01')
// new Date.parse('2023-03-01')


// console.log(now.setHours(13, 40))
console.log(now.setHours(40)) //автоисправление, следующий день
console.log(now)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())

// console.log(now.getUTCHours())

// console.log(now.getTimezoneOffset())

// console.log(now.getTime())

// console.log(now.getTimezoneOffset()) 

let start = new Date()

for (let i = 0; i < 100000; i++) {
    let some = i ** 3
}

let end = new Date()

console.log(`цикл отбработал за ${end - start} миллисекунд`)
