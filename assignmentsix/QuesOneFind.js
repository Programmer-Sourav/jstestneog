 function findFirstPositiveNumber(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.')
    }
  
    const positiveNumbers = arr.filter((num) => num > 0)
  
    if (positiveNumbers.length > 0) {
      return positiveNumbers[0]
    } else {
      return undefined
    }
  }


  module.exports = findFirstPositiveNumber