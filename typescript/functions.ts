function add(a: number, b: number): number {
    return a + b
}

function toUppercase(str: string): string {
    return str.trim().toUpperCase()
}

interface  MyPosition {
    x: number | undefined,
    y: number | undefined,
}

interface MyPositionWithDefault extends MyPosition {
    default: string,
}

function position(): MyPosition

function position(a: number): MyPositionWithDefault

function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: 'good' }
    }

    return { x: a, y: b }
}

console.log(position())
console.log(position(42))
console.log(position(25, 35))
