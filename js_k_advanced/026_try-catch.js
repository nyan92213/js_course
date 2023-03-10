'use strict'

try {
    console.log('Normal')
    console.log(a)
    console.log('result')
} catch(error) {
    console.log('Error')
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
} finally {
    console.log('anyway finnish smth working')
}

console.log('complete')

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click')
    })
} catch(error) {  // в catch можно не указывать ничего и поставить {}
    console.log(error)
}

console.log('normal')