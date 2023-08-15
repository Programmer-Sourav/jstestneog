const { describe } = require("node:test")
const findCommonElement = require("./QuesTwoFind")

describe("QuesTwoFind", ()=>{
    describe("findCommonElement", ()=>{
       test("Find a common element", ()=>{
        const iArray1 = [2, 4, 6, 8, 10]
        const iArray2 = [5, 7, 8, 10, 12]
        const  expectedOutput = 8
        expect(findCommonElement(iArray1, iArray2)).toBe(expectedOutput)
        
       })

       test("Find a common element in arrays with no common elements", ()=>{
        const iArray1 = [2, 4, 6]
        const iArray2 =  [5, 7, 9]
        const  expectedOutput = undefined
        expect(findCommonElement(iArray1, iArray2)).toBe(expectedOutput)
       })

       test("Find a common element when one array is empty", ()=>{
         const iArray1 = []
         const iArray2 = [5, 7, 8, 10, 12]
         const expectedOutput = undefined
         const findElement = findCommonElement(iArray1, iArray2)
         expect(findElement).toBe(expectedOutput)
       })
       test("Find a common element when both arrays are empty", ()=>{
             const iArray1 = []
             const iArray2 = []
             const expectedOutput = undefined
             const findElement = findCommonElement(iArray1, iArray2)
             expect(findElement).toBe(expectedOutput)
       })
       test("Check if the function throws an error with invalid input", ()=>{
            const iArray1 = 'invalid1' 
            const iArray2 = 'invalid2'
            const validFlag = !iArray1 instanceof Array && !iArray2 instanceof Array
            const findElement = findCommonElement(iArray1, iArray2)
            validFlag && expect(()=>{findElement}).toThrow("")

       })
    })

})