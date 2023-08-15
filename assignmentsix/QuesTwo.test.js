const reverseStrings = require("./QuesTwo")
//import { reverseStrings } from "./QuesTwo";

describe("QuesTwo", ()=>{
    describe("reverseString", () =>{    
    test("Reverse multiple strings", ()=>{
        const input = ['hello', 'world', 'jest']
        const output = ['olleh', 'dlrow', 'tsej']

        expect(reverseStrings(input)).not.toEqual(input)
        expect(output).toHaveLength(input.length)
        expect(reverseStrings(input)).toEqual(output)
    });
    
    test("Handle empty input array", ()=>{
        const input = []
        expect(input).toHaveLength(0)
        expect(reverseStrings([])).toEqual([])
    });
    
    test("Reverse strings with spaces", ()=>{
        expect(reverseStrings(['hello world', 'goodbye space'])).toEqual( ['dlrow olleh', 'ecaps eybdoog'])
    });
    test("Original array remains unchanged", ()=>{
        const input = ['abc', 'def']
        const revoutput = ['def', 'abc']
        const output = ['abc', 'def']
        expect(reverseStrings(input)).not.toBe(revoutput)
        expect(input).toEqual(output); 
    });
    test("Reverse and check individual characters", ()=>{
        expect(reverseStrings(['abc', '123'])).toContain('cba');
        expect(reverseStrings(['abc', '123'])).toContain('321');
    });
    })
    })