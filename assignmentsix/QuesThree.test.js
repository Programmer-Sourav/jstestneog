const squareRoots = require("./QuesThree")

//import { squareRoots } from "./QuesThree"

describe("QuesThree", ()=>{
    test("Calculate square roots of positive integers", ()=>{
        expect(squareRoots([4, 9, 16])).toEqual([2, 3, 4])
        expect(squareRoots([-4, -9, 16])).not.toEqual([2, 3, 4]);  //Should fail with negative numbers
    })
    test("Calculate square roots of positive floating-point numbers", ()=>{
        expect(squareRoots([2.25, 0.25, 1.44])).toEqual([1.5, 0.5, 1.2])
        expect(squareRoots([-2.25, 0.25, -1.44])).not.toEqual([1.5, 0.5, 1.2]);  //Should fail with negative numbers
    })
    test("Handle empty input array", ()=>{
        expect([]).toEqual([])
    })
    test("Ensure original array remains unchanged", ()=>{
        expect([4, 9, 16]).not.toBe(squareRoots([4,9,16]))
        expect([4, 9, 16]).toEqual([4, 9, 16])
    })
    test("Ensure each result is close to the actual square root", ()=>{
        const input = [25, 64, 100]
        const expectedOp = [5, 8, 10]
        const received = squareRoots(input)
        for(let i = 0 ; i<received.length; i++){
            expect(received[i]).toBeCloseTo(expectedOp[i])
        }
    })
})
