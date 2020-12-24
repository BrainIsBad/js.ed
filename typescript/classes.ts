class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}
class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(model: string) {
        this.model = model
    }
}
class NewCar {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go() {
        console.log('Go')
    }
}

class Cat extends Animal{
    public setVoice(voice: string) {
        this.voice = voice
    }
}

abstract class Component {
    abstract render(): void
    abstract info(): string
}