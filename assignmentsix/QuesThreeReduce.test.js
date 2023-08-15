
const flattenNestedArrays = require("./QuesThreeReduce")


describe("QuesThreeReduce", ()=>{
    describe("FlattennetedArray", ()=>{
        test("Flatten nested arrays with mixed elements", ()=>{
            const input = [[1, 2], [3, 4], [5, 6]]
            const output = [1, 2, 3, 4, 5, 6]
            const filteredArray = flattenNestedArrays(input)        
            expect(filteredArray).toEqual(output)
        })
    })

    test("Flatten nested arrays with arrays of different lengths", ()=>{
        const input = [[1, 2], [3, 4, 5], [6]]
        const expectedOutput = [1, 2, 3, 4, 5, 6]
        const filteredArray = flattenNestedArrays(input)
        expect(filteredArray).toEqual(expectedOutput)
    })
    test("Flatten nested arrays with empty arrays", ()=>{
      const input = [[], [], []]
      const output = []
      const filteredArray = flattenNestedArrays(input)
      expect((filteredArray)).toEqual(output)
    })
    test("Flatten nested arrays with arrays containing non-numeric elements", ()=>{
        const input = [[1, 2], ['a', 'b'], [3, 4]]
        const output = [1, 2, 'a', 'b', 3, 4]
        const filteredArray = flattenNestedArrays(input)
        expect(filteredArray).toEqual(output)
    })

    test("Flatten an empty array of nested arrays", ()=>{
        const input = []
        const output = []
        const filteredArray = flattenNestedArrays(input)
        expect(filteredArray).toEqual([])
    })

    test("Ensure original nested arrays remain unchanged", ()=>{
        const input = [[1, 2], [3, 4], [5, 6]]
        const copiedInput = [...input]
        const filteredArray = flattenNestedArrays(input)
        expect(filteredArray).not.toBe(input)
        expect(copiedInput).toEqual(input)
    })

    test("Check if the function throws an error with invalid input", ()=>{
        const input = 'invalid'
        const filtered = flattenNestedArrays(input)
        const flag = !inputValue instanceof Array
        expect(flag).toBe(false)
        expect(() => {filtered}).toThrow("strings.filter is not a function");
    })
})