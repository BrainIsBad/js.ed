class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }

    sign() {
        console.log('STOP')
    }
}
class YellowLight extends Light {
    constructor() {
        super('yellow')
    }

    sign() {
        console.log('WAIT')
    }
}
class GreenLight extends Light {
    constructor() {
        super('green')
    }

    sign() {
        console.log('GO')
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new GreenLight(),
            new YellowLight(),
            new RedLight()
        ]
        this.current = this.states[0]
    }

    change() {
        const total = this.states.length
        let index = this.states.findIndex(light => light === this.current)
        if ((index + 1) < total) {
            this.current = this.states[index + 1]
        } else {
            this.current = this.states[0]
        }
    }

    sign() {
        return this.current.sign()
    }
}

const traffic = new TrafficLight()
traffic.sign()
traffic.change()
traffic.sign()
traffic.change()
traffic.sign()