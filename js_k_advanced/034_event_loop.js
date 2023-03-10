'use strict'

console.log(1)

setTimeout(() => {
    console.log('timeout')
}, 4000)

setTimeout(() => {
    console.log('timeout 2')
}, 4000)

console.log(2)

setTimeout(() => {          //сначала выполнится синхронный код, потом уже этот setTimout
    console.log('timeout 2')
}, 0) // когда здесь 0, js автоматом подставит 4

console.log(3) 