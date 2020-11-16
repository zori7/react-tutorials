const arrayOfNumbers: Array<number> = [1, 2, 3, 5, 10]
const arrayOfStrings: Array<string> = ['edew', 'efref', 'tyh']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
