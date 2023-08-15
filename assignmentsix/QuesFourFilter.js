function filterByProperties(objects, properties) {
    return objects.filter((obj) => {
      for (const key in properties) {
        if (obj[key] !== properties[key]) {
          return false
        }
      }
      return true
    })
  }
  
  const items = [
    { name: 'Item 1', price: 10, category: 'A' },
    { name: 'Item 2', price: 25, category: 'B' },
    { name: 'Item 3', price: 10, category: 'A' },
    { name: 'Item 4', price: 15, category: 'C' },
  ]
  
  const criteria = { price: 10, category: 'A' }
  const filteredItems = filterByProperties(items, criteria)


  module.exports = filterByProperties