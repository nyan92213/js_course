'use strict'

setTimeout(() => console.log('timeout'))

Promise.resolve() // добавляются в очередь микрозадач. выполняются сразу как выполнилась первая макрозадача
    .then(() => console.log('promise'))

queueMicrotask(() => console.log('wow')) // позволяет вставить команду в очередь микрозадач

Promise.resolve() // добавляются в очередь микрозадач. выполняются сразу как выполнилась первая макрозадача
    .then(() => console.log('promise_2'))

console.log('code')

// выполнение задач
// (macrotask) => {} 
// all microtasks: then/catch/finnaly/await
// render 
// (macrotask) => {}
// all microtasks: then/catch/finnaly/await
// render 