function sumNestedArrays(arr) {
    return arr.reduce(
      (sum, curr) => sum + curr.reduce((innerSum, num) => innerSum + num, 0),
      0,
    )
  }

  module.exports = sumNestedArrays