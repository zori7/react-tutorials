interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number,
    },
}

const rect1: Rect = {
    id: 'dwef3f3f3f',
    size: {
        width: 33,
        height: 25,
    },
    color: '#ccc',
}

const rect2: Rect = {
    id: '3e33f3f',
    size: {
        width: 22,
        height: 15,
    },
}

const rect3 = {} as Rect

interface RectWithArea extends Rect {
    getArea: () => number,
}

const rect4: RectWithArea = {
    id: '12312ded3',
    size: {
        width: 15,
        height: 7,
    },
    getArea() {
        return this.size.width * this.size.height
    }
}

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid blue',
    marginTop: '2px',
    borderRadius: '5px',
}
