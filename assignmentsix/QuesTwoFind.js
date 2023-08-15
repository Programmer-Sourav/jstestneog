function findCommonElement(arr1, arr2) {
    return arr1.find((item) => arr2.includes(item))
  }
  
  const array1 = [2, 4, 6, 8, 10]
  const array2 = [5, 7, 8, 10, 12]
  const commonElement = findCommonElement(array1, array2)


  module.exports = findCommonElement