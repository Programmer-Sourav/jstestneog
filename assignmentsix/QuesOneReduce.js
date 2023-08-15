function findMaxNumber(arr) {
    return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0])
  }

  module.exports = findMaxNumber