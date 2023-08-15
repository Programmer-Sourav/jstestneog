const findDuplicates = require("./FindDuplicates")

describe("map utility", ()=>{
    describe("find Duplicates", ()=>{
        test("Find duplicates in an array", ()=>{
          const expectedInput = [1, 2, 3, 2, 4, 5, 3, 6, 7]
          const expectedOutput = [2, 3]
          const updatedArray = findDuplicates(expectedInput)
          expect(updatedArray).toEqual(expectedOutput)
        })
        test("Handle array with no duplicates", ()=>{
            const expectedInput = 	[9, 8, 7, 6, 5, 4, 3, 2, 1]
            const expectedOutput = []
            const updatedArray = findDuplicates(expectedInput)
            expect(expectedOutput).toEqual([])
            expect(updatedArray).toEqual(expectedOutput)
        })

        test("Find duplicates with negative numbers", ()=>{
            const expectedInput = [1, -2, 3, -2, 4, 5, 3, -6, 7]
            const expectedOutput = [-2, 3]
            const updatedArray = findDuplicates(expectedInput)
            expect(updatedArray).toEqual(expectedOutput)

        })
        test("Find duplicates with floating-point numbers", ()=>{
            const expectedInput = 	[1.5, 2.3, 1.5, 4.8, 2.3]
            const expectedOutput =  [1.5, 2.3]
            const updatedArray = findDuplicates(expectedInput)
            expect(updatedArray).toEqual(expectedOutput)
        })
        test("Handle empty input array", ()=>{
            const expectedInput = []
            const expectedOutput = []
            const updatedArray = findDuplicates(expectedInput)
            expect(updatedArray).toEqual([])
            expect(updatedArray).toEqual(expectedOutput)
        })
    })
})

