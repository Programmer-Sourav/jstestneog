const { describe } = require("node:test");
const groupByProperty = require("./QuesFourReduce");

const students = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 25 },
  ]
  
  
describe("QuesFourReduce", ()=>{
    describe("groupByProperty", ()=>{
        test("Group objects by an existing property", ()=>{
              const reducedResult = groupByProperty(students, 'age')
              const expectedOutput = {
                '25': [ { name: 'Alice', age: 25 }, { name: 'Carol', age: 25 } ],
                '30': [ { name: 'Bob', age: 30 } ]
              }
            expect(reducedResult).toEqual(expectedOutput)
        })
    })

    describe("Group objects by an empty property", ()=>{
        const reducedResult = groupByProperty(students, '')
        const expectedOutput = {
            '': [ { name: 'Alice', age: 25 }, { name: 'Carol', age: 25 } ],
            '': [ { name: 'Bob', age: 30 } ]
          }
          expect(reducedResult).toEqual(expectedOutput)
    })

    describe("Group objects with no objects", ()=>{
        const reducedResults = groupByProperty([], 'age')
        const expectedResult = {}
        expect(reducedResults).toEqual(expectedResult)
    })
})