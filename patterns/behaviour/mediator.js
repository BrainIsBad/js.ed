class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(msg, to) {
        this.room.send(msg, this, to)
    }
    recieve(msg, from) {
        console.log(`${from.name} => ${this.name}: ${msg}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = []
    }

    register(user) {
        this.users.push(user)
        user.room = this
    }

    send(msg, from, to) {
        if (to) {
            to.recieve(msg, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].recieve(msg, from)
                }
            })
        }
    }
}

const shrek = new User('Shrek')
const yoda = new User('Yoda')
const kermit = new User('Kermit')

const room = new ChatRoom()
room.register(yoda)
room.register(shrek)
room.register(kermit)

shrek.send('Hello')