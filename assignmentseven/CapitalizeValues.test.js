const capitalizeValues = require("./CapitalizeValues")

describe("map utility", ()=>{
    describe("capitalize", ()=>{
        test("should capitalize all strings in the array", ()=>{
            const expectedInput = ['apple', 'banana', 'cherry']
            const expectedOutput = ['Apple', 'Banana', 'Cherry']
            const capitalized = capitalizeValues(expectedInput)
            expect(capitalized).toEqual(expectedOutput)
        })

        test("should handle empty input array", ()=>{
            const expectedInput = []
            const expectedOutput = []
            const capitalized = capitalizeValues(expectedInput)
            expect(capitalized).toEqual(expectedOutput)
            expect(expectedOutput).toEqual([])
        })

        test("should Capitalize strings with spaces", ()=>{
            const expectedInput = ['hello world', 'goodbye space']
            const expectedOutput = ['Hello world', 'Goodbye space']
            const capitalized = capitalizeValues(expectedInput)
            expect(capitalized).toEqual(expectedOutput)
        })

        test("Original array remains unchanged", ()=>{
            const expectedInput = ['abc', 'def']
            const inputcopy = expectedInput
            const expectedOutput = ['Abc', 'Def']
            const capitalized = capitalizeValues(expectedInput)
            expect(capitalized).toEqual(expectedOutput)
            expect(expectedInput).toBe(inputcopy)     
        })

        
        test("Capitalize strings with special characters", ()=>{
            const expectedInput = ['!@#', '$%^']
            const expectedOutput = ['!@#', '$%^']
            const capitalized = capitalizeValues(expectedInput)
            expect(capitalized).toEqual(expectedOutput)   
        })

        test("Capitalize and check mixed case strings", ()=>{
            const expectedInput =['loRem', 'IpSum', 'DoLor']
            const expectedOutput = ['Lorem', 'Ipsum', 'Dolor']
            const capitalized = capitalizeValues(expectedInput)
            expect(capitalized).toEqual(expectedOutput)   
        })
    })
})