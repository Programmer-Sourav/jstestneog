const findLastNegativeNumber = require("./FindLastNegativeNumber")

describe("find utility exercises", ()=>{
    describe("findLastNegativeNumber", ()=>{
        test("Find last negative number", ()=>{
            const input = [3, -7, -2, 9, -5]
            const output = -5
            const findLastNegative = findLastNegativeNumber(input)
            expect(findLastNegative).toBe(output)
        })

        test("Find last negative number in an array with no negative numbers", ()=>{
            const input = [3, 7, 2, 9, 5]
            const output = undefined
            const findLastNegative = findLastNegativeNumber(input)
            expect(findLastNegative).toBe(output)
        })
        test("Find last negative number in an array with decimal numbers", ()=>{
            const input = 	[3.5, -7.2, -2.1, 9.7, 5.3]
            const output = -2.1
            const findLastNegative = findLastNegativeNumber(input)
            expect(findLastNegative).toBe(output)
        })
        test("Check if the output is a number", ()=>{
            const input = 	[3, -7, -2, 9, -5]
            const output = -5
            const findLastNegative = findLastNegativeNumber(input)
            expect(findLastNegative).toBe(output)
            expect(typeof findLastNegative).toBe('number')
        })
        test("Check if the function throws an error with invalid input", ()=>{
            const input = 	'invalid'
            const findLastNegative = findLastNegativeNumber(input)
            expect(()=>{findLastNegative}).toThrow("")
        
        })
    })

})