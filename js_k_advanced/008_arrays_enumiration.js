'use strict'

//=========================================================
// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Vladilenoslav']

// const shortNames = names.filter(function(name) {
//     return name.length < 5
// })

// console.log(shortNames, names)

//=========================================================
// map

// let answers = ['IvAn', 'AnnA', 'Hello']

// const result = answers.map(item => item.toLocaleLowerCase())

// console.log(result)

//=========================================================
// every/some

// const some = [4, 'qwerty', 'fdaggd']

// // console.log(some.some(item => typeof(item) === 'number')) // хотябы один элемент должен соответствовать условию

// console.log(some.every(item => typeof(item) === 'number')) // все элементы должны соответствовать условию

//=========================================================
// reduce - схлопывание массивов в одно значение

const arr = [4, 5, 1, 3, 2, 6]

const result = arr.reduce((sum, current) => sum + current, 3) // 3 - начальное значение

console.log(result)

// const arr = ['apple', 'pear', 'plum']

// const result = arr.reduce((sum, current) => `${sum}, ${current}`)

// console.log(result)

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
}

let newArray = Object.entries(obj)
.filter((item) => item[1] === 'person')
.map(item => item[0])

// newArray.forEach(item => {
//     if (item[1] === 'person') {
//         console.log(item[0])
//     }
// })

console.log(newArray)