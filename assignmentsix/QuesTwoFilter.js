function filterEvenAndPositive(arr) {
   return arr.filter((num) => num % 2 === 0).filter((num) => num > 0)
  }

  module.exports = filterEvenAndPositive