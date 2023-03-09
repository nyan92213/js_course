'use strict'

// new RegExp('pattern', 'flags') // никто не пользуется потому что длинный

// /pattern/f //короткий, который используется часто

// const ans = prompt('Введите Ваше имя')

// const reg = /n/

// console.log(ans.search(reg)) // вернет первое встречающееся, если нет, вернет -1

// const ans = prompt('Введите Ваше имя')

// const reg = /n/ig
// флаги:
// i - вне зависимости от регистра
// g - пытаемся найти несколько вхождений
// m - включает переносы

// console.log(ans.search(reg)) // вернет первое встречающееся, если нет, вернет -1 (не работает с g)
// console.log(ans.match(reg))

// const pass = prompt('password')

// console.log(pass.replace(/\./g, "*")) // Точка берет все элементы, которые попадут в строку. ЧТоб взять именно точку, надо перед ней поставить \

// console.log('12-34-56'.replace(/-/g, ':'))

// const ans = prompt('Введите Ваше число')

// const reg = /\d/g

// // классы

// // \d - цифры (digitns)
// // \w - буквы (words)
// // \s -  пробелы (spases)

// \D - все НЕ цифры
// \W - все Не буквы


// console.log(ans.match(reg))

const str = 'My name is R2D2'

console.log(str.match(/\D/ig))

