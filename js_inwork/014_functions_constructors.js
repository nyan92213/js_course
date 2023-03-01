'use strict'

function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.hello = function() {
        console.log(`hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

const ivan = new User('Ivan', 28),
      alex = new User('Alex', 20)

// console.log(ivan, alex)

// ivan.hello()
// alex.hello()

ivan.exit()
alex.exit()