function groupByProperty(objects, property) {
    return objects.reduce((grouped, currentObject) => {
      const propValue = currentObject[property]
      if (!grouped[propValue]) {
        grouped[propValue] = []
      }
      grouped[propValue].push(currentObject)
      return grouped
    }, {})
  }
  
  const students = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 25 },
  ]
  
  const groupedByAge = groupByProperty(students, 'age')

  module.exports = groupByProperty