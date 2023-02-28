'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
}

const userMap = new Map(Object.entries(user))
console.log(userMap)

const newUserObj = Object.fromEntries(userMap)
console.log(newUserObj)

// console.log(typeof(Object.keys(user)[0]))

const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50}
]

const budget = [5000, 15000, 2500]

const map = new Map([
    [{paper: 400}, 8000]
]);

//map - массив с массивами, не смотря на то, что отображается в консоли как объект

shops.forEach((shop, i) => {
    map.set(shop, budget[i])
})

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 55000)

console.log(map)
// console.log(map.has(shops[8]))
// console.log(map.delete(shops[0]))
// console.log(map.clear())
// console.log(map.size)
// console.log(map.keys())

const goods = []
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0])
}

console.log (goods)
for (let price of map.values()) {
    console.log(price)
}

for (let [shop, price] of map.entries()) {
    console.log(shop, price)
}

map.forEach((value, key) => {
    console.log(key, value)
})