function calculateFactorial(n) {
    if (n < 0) {
      throw new Error('Input must be a non-negative integer.')
    }
    return n === 0
      ? 1
      : Array.from({ length: n }, (_, i) => i + 1).reduce(
          (product, num) => product * num,
          1,
        )
  }

  module.exports = calculateFactorial