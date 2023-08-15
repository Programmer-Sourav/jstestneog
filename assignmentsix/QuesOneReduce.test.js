const findMaxNumber = require("./QuesOneReduce")


describe("reduceexcercise", ()=>{
    test("Find maximum in a positive number array", ()=>{
        const input = [3, 7, 2, 9, 5]
        const expectOutput = 9
        expect(findMaxNumber(input)).toBe(expectOutput)
    })

    test("Find maximum in a negative number array", ()=>{
        const input = [-3, -7, -2, -9, -5]	
        const expectedOutput = -2
        expect(findMaxNumber(input)).toBe(expectedOutput)
    })

    test("Find maximum in an array with identical elements", ()=>{
        const input = [7, 7, 7, 7]
        const expectedOutput = 7
        expect(findMaxNumber(input)).toBe(expectedOutput)
    })

    test("Ensure original array remains unchanged", ()=>{
        const input = [3, 7, 2, 9, 5]
        const expectedOriginalArray = [3, 7, 2, 9, 5]
        const expectedOutput = 9
        const copiedArray = input
        expect(findMaxNumber(input)).toBe(expectedOutput)
        expect(findMaxNumber(input)).not.toBe(copiedArray)
        expect(input).toEqual(expectedOriginalArray)
    })

    test("Find maximum in an array with decimal numbers", ()=>{
        const input = [3.5, 7.2, 2.1, 9.7, 5.3]
        const output = 9.7
        expect(findMaxNumber(input)).toBe(output)
    })

    test("Find maximum in an empty array", ()=> {
       const input = []
       const filteredValue = findMaxNumber(input)
       const expectedOutput = undefined
       expect(filteredValue).toBeUndefined(expectedOutput) 
    })
})
