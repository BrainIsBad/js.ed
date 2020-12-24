const people = [
    {name: 'Jack', age: 21, budget: 10000},
    {name: 'Lebron', age: 32, budget: 12000},
    {name: 'Stephen', age: 42, budget: 9000},
    {name: 'James', age: 18, budget: 150000},
    {name: 'Paul', age: 15, budget: 400},
    {name: 'David', age: 28, budget: 8888},
]

//Foreach

people.forEach((person, index, pArr) => {
    pArr[index].data = 'data'
})

//Map

const newpeople = people.map(person => person.name)
console.log(newpeople)

//Filter

const filter = people.filter(person => person.age > 18)
console.log(filter)

//Reduce

const reduce = people.reduce((acc, person) => {
    acc.push(person.budget)
    return acc
}, [])
console.log(reduce)

//Find

console.log(people.find(person => person.name === 'Stephen'))

//FindIndex

console.log(people.findIndex(person => person.name === 'Stephen'))