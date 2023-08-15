function countPositiveNumbers(arr) {
    return arr.reduce((count, curr) => (curr > 0 ? count + 1 : count), 0)
  }

  module.exports = countPositiveNumbers