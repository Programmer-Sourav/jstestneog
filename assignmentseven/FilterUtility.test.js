const filterUniqueStrings = require("./FilterUtility")

describe("map utility", ()=>{
    describe("FilterUtility", ()=>{
        test("should capitalize all strings in the array", ()=>{
            const expectedInput = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana']
            const expectedOutput = ['apple', 'banana', 'cherry', 'date']
            const filtered = filterUniqueStrings(expectedInput)
            expect(filtered).toEqual(expectedOutput)
        })

        test("Handles empty input array", ()=>{
            const expectedInput = []
            const expectedOutput = []
            const filtered = filterUniqueStrings(expectedInput)
            expect(expectedOutput).toEqual([])
            expect(filtered).toEqual(expectedOutput)
        })

        test("Handles input with all unique strings", ()=>{
            const expectedInput = ['one', 'two', 'three']
            const expectedOutput = ['one', 'two', 'three']
            const filtered = filterUniqueStrings(expectedInput)
            expect(filtered).toEqual(expectedOutput)
        })

        test("Handles input with one repeated string", ()=>{
            const expectedInput = 	['apple', 'apple', 'apple']
            const expectedOutput = ['apple']
            let expected = []
            for(let i = 0; i<expectedInput.length; i++)
             {
                if(!expected.includes(expectedInput[i])){
                   expected =  [...expected, expectedInput[i]]
                }
             }
            expect(expected).toEqual(expectedOutput)
            const filtered = filterUniqueStrings(expectedInput)
            expect(filtered).toEqual(expectedOutput)
        })

        test("Checks if the output array contains only unique strings", ()=>{
            const expectedInput = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana']
            const expectedOutput =['apple', 'banana', 'cherry', 'date']
            const filtered = filterUniqueStrings(expectedInput)
            expect(filtered).toEqual(expectedOutput)
        })

        test("Checks if the output array length is correct", ()=>{
            const expectedInput = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana']
            const expectedOutput =['apple', 'banana', 'cherry', 'date']
            const expectedLength = 4
            const filteredLength = filterUniqueStrings(expectedInput).length
            const filtered = filterUniqueStrings(expectedInput)
            expect(filtered).toEqual(expectedOutput)
            expect(filteredLength).toBe(expectedLength)
        })

        test("Checks if the function throws an error with invalid input", ()=>{
            const expectedInput = 'invalid'
             //if(!expectedInput instanceof Array)
               
            const filtered = filterUniqueStrings(expectedInput)
            expect(()=>{filtered}).toThrow("")
        })



    })
    

})