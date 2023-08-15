const filterEvenAndPositive = require("./QuesTwoFilter")
//import { filterEvenAndPositive } from "./QuesTwoFilter"

describe("QuesTwoFilter", ()=>{
    describe("filterEvenAndPositive", ()=>{
        test("Filters even and positive numbers", ()=>{
            const filteredArray = filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])
            const expectedArray = [2, 4, 8]
            expect(filteredArray).toEqual(expectedArray)
        });

        test("Handles empty input array", ()=>{
            const inputArray = []
            const expectedArray = []
            expect(inputArray).toHaveLength(0)
            expect(expectedArray).toHaveLength(0)
            expect(inputArray).toEqual(expectedArray)
        })

        test("Handles input with no even and positive numbers", ()=>{
            const inputArray = [-3, -5, -7]
            const expectedArray = []
            expect(filterEvenAndPositive(inputArray)).toEqual(expectedArray)
            expect(expectedArray.length).toBe(0)
        })

        test("Handles input with only positive but odd numbers", ()=>{
           const inputArray = [1, 3, 5, 7]
           const expectedArray = []
           expect(filterEvenAndPositive(inputArray)).toEqual(expectedArray)
        })
        test("Checks if the output array contains only even and positive numbers", ()=>{
            const inputArray = [2, 4, -6, 8, 9, -10, 11]
            const expectedArray = [2, 4, 8]
            const filteredArray = filterEvenAndPositive(inputArray)
            const expectedOutput = filteredArray.every((num)=>num%2===0 && num>0)
            expect(expectedOutput).toBe(true)
            expect(filteredArray).toEqual(expectedArray)
        })
        test("Checks if the output array length is correct", ()=>{
           const inputArray = 	[2, 4, -6, 8, 9, -10, 11]
           const expectedArray = [2, 4, 8]
           const filteredArray = filterEvenAndPositive(inputArray)
           expect(filteredArray).toHaveLength(3)
           expect(filteredArray).toEqual(expectedArray)
        })

        test("Checks if the filtered array does not contain negative numbers", ()=>{
           const inputArray =  [2, 4, -6, 8, 9, -10, 11]
           const expectedArray = [2, 4, 8]
           const filteredArray = filterEvenAndPositive(inputArray)
           for(let i = 0; i<filteredArray.length; i++){
             expect(filteredArray[i]).not.toContain(filteredArray[i]<0)
           }
           expect(filteredArray).toEqual(expectedArray)
        })
        test("Checks if the function throws an error with invalid input", ()=>{
            const inputValue = 'invalid'
            const flag = !inputValue instanceof Array
            expect(flag).toBe(false)
            expect(() => {filterEvenAndPositive(inputValue)}).toThrow("arr.filter is not a function");
        })
    })
})