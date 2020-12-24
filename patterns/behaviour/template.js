class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} do ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has Salary ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'write code'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'testing'
    }
}

const dev = new Developer('Jack', 12251)
console.log(dev.getPaid())
console.log(dev.work())