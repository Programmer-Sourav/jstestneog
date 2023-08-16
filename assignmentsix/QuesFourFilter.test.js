const filterByProperties = require("./QuesFourFilter")

const items = [
  { name: 'Item 1', price: 10, category: 'A' },
  { name: 'Item 2', price: 25, category: 'B' },
  { name: 'Item 3', price: 10, category: 'A' },
  { name: 'Item 4', price: 15, category: 'C' },
]

describe("QuesFourFilter", ()=>{
    describe("FilterByProperties", ()=>{
        test("Filter items based on criteria", ()=>{
         
          
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(items, inputProperties)
          const filteredNames = filteredArray.map((item)=>item.name)
          const expectedArray = ["Item 1", "Item 3"]
          expect(filteredNames).toEqual(expectedArray)
        })

        test("Ensure original array remains unchanged", ()=>{
          const inputObject = [...items];
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(inputObject, inputProperties)
          const expectedArray = [...items]
          expect(inputObject).toEqual(expectedArray)
          expect(expectedArray).not.toBe(filteredArray)
          
        })

        test("Check if filtered array includes certain items", ()=>{
          const inputArray = [...items]
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(inputArray, inputProperties)
          const filteredNames = filteredArray.map((item)=>item.name)
          const expectedArray = ["Item 1", "Item 3"]
          for(let i = 0; i<filteredNames.length; i++){
             expect(filteredNames).toContainEqual(expectedArray[i])
          }
        })

        test("Check if filtered array does not include certain items", ()=>{
          const inputArray = [...items]
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(inputArray, inputProperties)
          const filteredNames = filteredArray.map((item)=>item.name)
          const expectedArray = ["Item 2", "Item 4"]
          for(let i = 0; i<filteredNames.length; i++){
             expect(filteredNames).not.toContainEqual(expectedArray[i])
          }
        })

        test("Check if the filtered array length is correct", ()=>{
          const inputArray = [...items]
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(inputArray, inputProperties)
          const filteredLength = filteredArray.length
          const expectedLength = 2
          expect(filteredArray).toHaveLength(expectedLength)

        })
        test("Check if the filtered array is an array", ()=>{
          const inputArray = [...items]
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(inputArray, inputProperties)
          expect(filteredArray).toBeInstanceOf(Array)
        })
        test("Check if the filtered array is not empty", ()=>{
          const inputArray = [...items]
          const inputProperties =  { price: 10, category: 'A' }
          const filteredArray = filterByProperties(inputArray, inputProperties)
          expect(filteredArray).not.toHaveLength(0)
          expect(filteredArray).not.toEqual([])
        })
    })
})