const car = {
    wheels: 4,

    init() {
        console.log(`I has ${this.wheels} wheels my owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Jack'
    }
})

carWithOwner.init()