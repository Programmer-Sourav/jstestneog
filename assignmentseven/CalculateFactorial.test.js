const calculateFactorial = require("./CalculateFactorial")




describe("reduceUtility", ()=>{
    describe("calculate Factorial", ()=>{
        test("Calculate factorial of 0", ()=>{
            const input = 0
            const output = 1
            const filtered = calculateFactorial(input)
            expect(filtered).toBe(output)
        })

        test("Calculate factorial of 1", ()=>{
            const input = 1
            const output = 1
            const filtered = calculateFactorial(input)
            expect(filtered).toBe(output)
        })

        test("Calculate factorial of 5", ()=>{
            const input = 5
            const output = 120
            const filtered = calculateFactorial(input)
            expect(filtered).toBe(output)
        })

        
        test("Calculate factorial of 10", ()=>{
            const input = 10
            const output = 3628800
            const filtered = calculateFactorial(input)
            expect(filtered).toBe(output)
        })

        test("Check if the output is a number", ()=>{
            const input = 5
            const output = 120
            const filtered = calculateFactorial(input)
            expect(filtered).toBe(output)
            expect(typeof filtered).toEqual('number');
        })
        test("Handle Negative input", ()=>{
            const input = -5
            const filtered = calculateFactorial(input)
            expect(()=>{filtered}).toThrow("Please enter valid input")
        })
    })
})