'use strict'

const arr = ['Alex', 'Anna', 'Oleg', 'Alex']

function unique(arr) {
    return Array.from(new Set(arr))
}
// быстрое избавление от повторов в массиве

console.log(unique(arr))

const set = new Set(arr)

set.add('Ivan')
    .add('Oleg')

console.log(set)

// set.delete(value)
// set.has(value)
// set.clear()
// set.size

// for (let value of set) {
//     console.log(value)
// }

set.forEach((value, valueAgain, set) =>{
    console.log(value, valueAgain)
})

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// три вещи выше и valueAgain созданы для обратной совместимости
