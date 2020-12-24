const MyPromise = require('./promise')
const t = setTimeout

describe('Promise', () => {
    let promise
    let executorSpy

    const successResult = 42
    const errorResult = 'I am error'

    beforeEach(() => {
        executorSpy = jest.fn((resolve) => t(() => resolve(successResult), 150))
        promise = new MyPromise(executorSpy)
    })

    test('should be defined and to be typeof function', () => {
        expect(MyPromise).toBeDefined()
        expect(typeof MyPromise).toBe('function')
    })

    const functions = ['then', 'catch', 'finally']
    functions.forEach(functionName => {
        test(`should has "${functionName}" function`, () => {
            expect(typeof promise[functionName]).toBeDefined()
            expect(typeof promise[functionName]).toBe('function')
        })
    })

    test('should call executor fn', () => {
        expect(executorSpy).toHaveBeenCalled()
    })

    test('should get data in then block and chain them', async () => {
        const result = await promise.then(num => num).then(num => num * 2)
        expect(result).toBe(successResult * 2)
    })

    test('should catch error', () => {
        const errorExecutor = (_, r) => t(() => r(errorResult), 150)
        const errorPromise = new MyPromise(errorExecutor)

        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult)
                resolve()
            })
        })
    })

    test('should call finally', async () => {
        const finallySpy = jest.fn(() => {})
        await promise.finally(finallySpy)
        expect(finallySpy).toBeCalled()
    })
})