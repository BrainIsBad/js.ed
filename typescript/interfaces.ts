interface Rect {
    readonly id: string,
    color?: string
    size: {
        width: number,
        height: number
    }
}

const  rect: Rect = {
    id: '1234',
    color: '#cccccc',
    size: {
        width: 124,
        height: 30
    }
}

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '12',
    size: {
        width: 20,
        height: 20
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
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}