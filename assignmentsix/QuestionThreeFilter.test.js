const { toBeArray } = require('jest-extended');
expect.extend({ toBeArray});


const {palindromicNumbers, isPalindromic} = require("./QuestionThreeFilter")


//import { isPalindromic } from "./QuestionThreeFilter"

describe("QuesThreeFilter", ()=>{
    describe("checkIfIsPalindrome", ()=>{
        test("Check for a palindromic number", ()=>{
            const inputValue = 121
            const expectedValue = true
            const filteredValue = isPalindromic(inputValue)
            expect(expectedValue).toBe(true)
            expect(filteredValue).toBe(expectedValue)
        })
        test("Check for a non-palindromic number", ()=>{
            const inputValue = 123
            const expectedValue = false
            const filteredValue = isPalindromic(inputValue)
            expect(expectedValue).toBe(false)
            expect(filteredValue).toBe(expectedValue)
        })
        test("Check for a single-digit number", ()=>{
            const inputValue = 5
            const expectedValue = true
            const filteredValue = isPalindromic(inputValue)
            expect(expectedValue).toBe(true)
            expect(filteredValue).toBe(expectedValue)
        })
        test("Filter palindromic numbers from the provided array", ()=>{
             const inputArray = [121, 123, 1331, 454, 678, 898]
             const expectedArray = [121, 1331, 454, 898]
             const filteredArray = palindromicNumbers(inputArray)
             console.log(121,filteredArray)
             expect(filteredArray).toEqual(expectedArray)
        })
        test("Filter palindromic numbers from an empty array", ()=>{
            const inputArray = []
            const expectedArray = []
            const filteredArray = palindromicNumbers(inputArray)
            expect(filteredArray).toEqual(expectedArray)
       })
       test("Filter palindromic numbers from an array with no palindromic numbers", ()=>{
        const inputArray = [123, 456, 789]
        const expectedArray =[]
        const filteredArray = palindromicNumbers(inputArray)
        expect(filteredArray).toEqual(expectedArray)
   })
   test("Ensure the filtered array contains only palindromic numbers", ()=>{
    const inputArray = [121, 1331, 454, 898]
    const expectedArray =[121, 1331, 454, 898]
    const filteredArray = palindromicNumbers(inputArray)
    const expectedOutput = filteredArray.every(isPalindromic)
    expect(expectedOutput).toBe(true)
    expect(inputArray).toEqual(expectedArray)
    })

    test("Check if the filtered array length is correct", ()=>{
        const inputArray = [121, 1331, 454, 898]
        const expectedArray =[121, 1331, 454, 898]
        const filteredArray = palindromicNumbers(inputArray)
        expect(filteredArray).toHaveLength(4)
        expect(inputArray).toEqual(expectedArray)
    })

    test("Check if the filtered array is an array", ()=>{
        const inputArray = [121, 1331, 454, 898]
        const expectedOutput = [121, 1331, 454, 898]
        const filteredArray = palindromicNumbers(inputArray)
        expect(filteredArray).toBeArray()
        expect(filteredArray).toEqual(expectedOutput)
    })

    })
})