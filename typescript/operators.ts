interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // name | age

let myname: PersonKeys = 'name'
myname = 'age'

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof  User, '_id' | 'createdAt'>