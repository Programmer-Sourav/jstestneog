const { describe } = require("node:test")
const findFirstPositiveNumber = require("./QuesOneFind")

describe("findUtility", ()=>{
    describe("findFirstPositiveNumber", ()=>{
        test("Find first positive number", ()=>{
            const input = [3, 7, -2, 9, -5]
            const findNumber = findFirstPositiveNumber(input)
            const expectedOutput = 3
            expect(findNumber).toBe(expectedOutput)
        })
    })

    test("Find first positive number in an array with only negative numbers", ()=>{
        const input = [-3, -7, -2, -9, -5]
        const output = undefined
        const findNumber = findFirstPositiveNumber(input)
        expect(findNumber).toBeUndefined(output)
    })

    test("Find first positive number in an array with decimal numbers", ()=>{
        const input = [3.5, 7.2, 2.1, 9.7, 5.3]
        const output = 3.5
        const findNumber = findFirstPositiveNumber(input)
        expect(findNumber).toBe(output)
    })

    test("Check if the function throws an error with invalid input", ()=>{
        const input = 'invalid'
        const flagValid = !input instanceof Array
        if(flagValid)
        expect(()=>{findFirstPositiveNumber(input)}).toThrow("")
    })
})