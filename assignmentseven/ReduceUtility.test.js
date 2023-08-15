const sumNestedArrays = require("./ReduceUtility")

describe("FilterByProperty Excercise", ()=>{
    describe("FilterbyProperty", ()=>{
        test("Sum numbers in a nested array", ()=>{
             const input = [[1, 2], [3, 4, 5], [6]]
             const output = 	21
             const filtered = sumNestedArrays(input)
             expect(filtered).toBe(output)
        })

        test("Sum numbers in an empty nested array", ()=>{
            const input = []
            const output = 	0
            expect(input).toEqual([])
            const filtered = sumNestedArrays(input)
            expect(filtered).toBe(output)
       })

       test("Ensure original array remains unchanged", ()=>{
        const input = [[1, 2], [3, 4, 5], [6]]
        const inputCopied = [...input]
        const output = 	21
        expect(input).toEqual(inputCopied)
        const filtered = sumNestedArrays(input)
        expect(filtered).toBe(output)
        expect(input).not.toBe(output)
   })

   test("Check if the output is a number", ()=>{
    const input = [[1, 2], [3, 4, 5], [6]]
    const expectedOutput = 21
    const filtered = sumNestedArrays(input)
    expect(filtered).toBe(expectedOutput)
    expect(typeof filtered).toEqual('number');
   })
    })
})