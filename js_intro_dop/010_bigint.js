'use strict'

// const bigint = 65894356948256924876589435694825692487n

const sameBigint = BigInt(65894356948256924876589435694825692487)

// console.log(typeof(bigint))

// console.log(5n + 1) // err
// console.log(Math.round(5n)) // err

console.log(5n / 2n) // 2 потому что округляем всегда, без дробной части

console.log(2n == 2) // true
console.log(2n === 2) // false

let bigint = 1n
let number = 2

// console.log(bigint + BigInt(number)) // 3n

console.log(Number(bigint) + number) // 3
console.log((+bigint) + number) // err
 