/*export*/ function reverseStrings(arr) {
    return arr.map((str) => str.split('').reverse().join(''))
  }

  module.exports = reverseStrings