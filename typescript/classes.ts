class Typescript {
    version: string,
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return 'version is ' + this.version
    }
}

/*class Car {
    readonly model: string,
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}*/

class Car {
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

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    info(): string {
        return 'this is info'
    }

    render(): void {
        console.log('component on render')
    }
}
