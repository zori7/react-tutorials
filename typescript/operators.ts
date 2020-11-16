interface Person {
    name: string,
    age: number,
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'
