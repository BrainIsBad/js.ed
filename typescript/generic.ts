const arrayOfNumbers: Array<number> = [1,1,2,3,5,8,13]

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}