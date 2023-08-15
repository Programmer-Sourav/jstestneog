//import { transformKeys } from "./QuesOne"
const transformKeys = require("./QuesOne")

describe("QuesOne", ()=>{
describe("transform", () =>{    
test("It should transform keys to Capital Letters", ()=>{
    const transformedObjValue = transformKeys({ name: 'John', age: 30, city: 'New York' })
    const expectedOutput = ['NAME', 'AGE', 'CITY']
    expect(transformedObjValue).toEqual(expectedOutput)
   
});

test("returns an empty array for an empty object", ()=>{
    const input = {}
    const expectedOutput = []
    
    const receivedOutput = transformKeys(input)
    expect(Object.keys(receivedOutput).length).toEqual(Object.keys(input).length);
    expect(receivedOutput).toEqual(expectedOutput)
});

test("does not modify the original object", ()=>{
    const transformedObjValue = transformKeys({key1: 'value1', key2: 'value2'})
    const expectedInput = { key1: 'value1', key2: 'value2' }
    const expectedOutput = {...expectedInput}
    expect(expectedInput).toEqual(expectedOutput)
    expect(transformedObjValue).not.toBe(expectedOutput)
});
})
})