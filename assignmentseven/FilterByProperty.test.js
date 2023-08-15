const filterByProperties = require("../assignmentsix/QuesFourFilter")

describe("FilterByProperty Excercise", ()=>{
    describe("FilterbyProperty", ()=>{
        test("Filters objects with specified property", ()=>{
            const objects = [{ name: 'apple', color: 'red' }, { color: 'yellow' }, { name: 'cherry', color: 'red' }]
            const property = 'name'
            const filtered = filterByProperties(objects, property)
            
        })
    })
})