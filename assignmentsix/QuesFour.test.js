const removeVowels = require("./QuesFour")

//import { removeVowels } from "./QuesFour";

describe("removeVowels", ()=>{
    test("Remove vowels from single word strings", ()=>{
        const inputArray = ['hello', 'world'];
        const expectedArray = ['hll', 'wrld'];
        expect(removeVowels(inputArray)).toEqual(expectedArray)
    })
    test("Handle strings with mixed case vowels", ()=>{
      const inputArray =   ['ApplE', 'OrAngE'];
      const expectedArray = ['ppl', 'rng'];

      const convertedArray = inputArray.map((item)=>item.toLowerCase())
      
      const manipulatedArray = removeVowels(convertedArray)
    
        expect(manipulatedArray).toEqual(expectedArray)
    })
    test("Handle empty strings",()=>{
       const inputArray = ['', 'test', ''];
       const expectedArray = ['', 'tst', ''];
       expect(removeVowels(inputArray)).toEqual(expectedArray)
    })
    test("Handle strings with no vowels", ()=>{
        const inputArray = ['xyz', 'qrst']
        const expectedArray = removeVowels(inputArray)
        expect(expectedArray).toEqual(inputArray)
    })
    test("Ensure original array remains unchanged", ()=>{
        const inputArray = ['hello', 'world']
        const expectedArray =  ['hello', 'world']
        expect(inputArray).not.toBe(removeVowels(inputArray))
        expect(inputArray).toEqual(expectedArray)
    })

    test("Handle strings with all vowels", ()=>{
        const inputArray = ['aeiou', 'AEIOU']
        const expectedArray = ['', '']
        const convertedArray = inputArray.map((item)=>item.toLowerCase())
        expect(removeVowels(convertedArray)).toEqual(expectedArray)
    })
})