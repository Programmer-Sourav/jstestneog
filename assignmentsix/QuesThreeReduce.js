function flattenNestedArrays(arrays) {
    return arrays.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      [],
    )
  }

  module.exports = flattenNestedArrays