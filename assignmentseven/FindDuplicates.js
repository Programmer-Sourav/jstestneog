 function findDuplicates(arr) {
    const uniqueNumbers = new Set()
    const duplicates = new Set()
  
    for (const num of arr) {
      if (uniqueNumbers.has(num)) {
        duplicates.add(num)
      } else {
        uniqueNumbers.add(num)
      }
    }
  
    return Array.from(duplicates)
  }


  module.exports = findDuplicates