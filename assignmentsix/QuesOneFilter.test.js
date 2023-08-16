//import { filterLongStrings } from "./QuesOneFilter"
const { toBeEmpty } = require('jest-extended');
expect.extend({ toBeEmpty});

const filterLongStrings = require("./QuesOneFilter")

describe("filterLongString", ()=>{
    test("Filters strings longer than minimum length", ()=>{
        const input = ['apple', 'banana', 'cherry', 'date']
        const minLength = 5
        const output = ['banana', 'cherry']
        expect(filterLongStrings(input, minLength)).toEqual(output)
    })
    test("Handles empty input array", ()=>{
        const inputArray = []
        const expectedArray = filterLongStrings(inputArray, 3)
        expect(inputArray).toHaveLength(0);
        expect(expectedArray).toHaveLength(0);
        expect(expectedArray).toEqual(inputArray)
    })
    
    test("Handles empty output array", ()=>{
        const inputArray= ['cat', 'dog', 'rat']
        const filteredArray = filterLongStrings(input, 3);
        const expectedArray = []
        expect(expectedArray).toEqual([])
        expect(filteredArray).toEqual(expectedArray);
    })

    test("Handles negative minimum length", ()=>{
        const inputArray = ['hello', 'world'];
        const expectedArray = ['hello', 'world']
        const filteredArray = filterLongStrings(['hello', 'world'], -2)
        expect(filteredArray.length).toBe(inputArray.length)
        expect(filteredArray).toEqual(expectedArray)
    })

    test("Ensures original array remains unchanged", ()=>{
        const inputArray = ['apple', 'banana', 'cherry']
        const expectedArray =  ['apple', 'banana', 'cherry']
        const minLength = 4; 
        const filteredArray = filterLongStrings(inputArray, minLength); 
        expect(filteredArray).not.toBe(inputArray)
        expect(filteredArray).toEqual(expectedArray)
    })

    // test("Handles strings with spaces", ()=>{
    //     const inputArray = ['hello world', 'foo bar', 'lorem ipsum']
    //     const expectedArray = ['hello world', 'lorem ipsum']
    //     const minLength  = 5;
    //     expect(filterLongStrings(inputArray, minLength)).toEqual(expectedArray)
    // })
    // test("Checks if the filtered array does not include certain elements", ()=>{
    //     const inputArray = ['apple', 'banana', 'cherry', 'date']
    //     const expectedArray = ['banana', 'cherry']
    //     const minLength = 4
    //     const filteredArray = filterLongStrings(inputArray, minLength)
    //     expect(filteredArray).not.toContain('apple')
    //     expect(filteredArray).not.toContain('date')
    //     expect(filteredArray).toEqual(expectedArray)
    // })

    // test("Checks the length of the output array", ()=>{
    //    const inputArray =  ['apple', 'banana', 'cherry', 'date']
    //    const minLength = 4
    //    const filteredArray = filterLongStrings(inputArray, minLength)
    //    expect(filteredArray).toHaveLength(2)
    // })

    test("Checks if the filtered array is empty", ()=>{
        const inputArray = ['apple', 'banana', 'cherry', 'date']
        const length = 10
        const expectedArray = []
        const filteredArray = filterLongStrings(inputArray, length)
        expect(filteredArray).toBeEmpty()
        expect(filteredArray).toEqual(expectedArray)
    })

    test("Checks if the function throws an error with invalid input", ()=>{
        const inputValue = 'invalid'
        const minLength = 5;
        const flag = !inputValue instanceof Array
        expect(flag).toBe(false)
        expect(() => {filterLongStrings(inputValue, minLength)}).toThrow("strings.filter is not a function");
    })
})