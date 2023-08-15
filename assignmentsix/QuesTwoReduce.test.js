
const countPositiveNumbers = require("./QuesTwoReduce")


describe("QuesTwoReduce", ()=>{
    describe("countPositiveNumbers", ()=>{
        

        test("Count positive numbers in an array with mixed numbers", ()=>{
            const filteredArray = countPositiveNumbers([3, -7, 1, 9, -5])
            const expectedOutput = 3
            expect(filteredArray).toBe(expectedOutput)
        });

        test("Count positive numbers in an array with all positive numbers", ()=>{
            const filteredArray = countPositiveNumbers([3, 7, 2, 9, 5])
            const expectedOutput = 5
            expect(filteredArray).toBe(expectedOutput)
        });

        test("Count positive numbers in an array with all negative numbers", ()=>{
            const filteredArray = countPositiveNumbers([-3, -7, -2, -9, -5])
            const expectedNumber = 0
            expect(filteredArray).toBe(expectedNumber)
        })

        test("Count positive numbers in an array with decimal numbers", ()=>{
            const input = [3.5, 7.2, -2.1, 9.7, -5.3]
            const expectedNumber = 3
            const filteredArray = countPositiveNumbers(input)
            expect(filteredArray).toBe(expectedNumber)
        })

    })

})