const str: string = 'Hello'
let isFetching: boolean = false

let int: number = 42
const num: number = 3e4

const numberArray: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 2, 3, 4, 5]

const words: Array<string> = ['Hello', 'ts']

const contact: [string, number] = ['Zori', 98]

let variable: any = 32

variable = 'new str'

function sayName(name: string): void {
    console.log(name)
}

// never

function throwError(message: string): never {
    throw new Error(message)
}

type Login = string | number

const login: Login = 'admin'
const login2: Login = 3

type Phone = string | null
