function findLastNegativeNumber(arr) {
    return arr.reverse().find((element) => element < 0)
  }

  module.exports = findLastNegativeNumber