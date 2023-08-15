function capitalizeValues(arr) {
    return arr.map((str) => {
      const firstChar = str.charAt(0).toUpperCase()
      const restOfStr = str.slice(1).toLowerCase()
      return firstChar + restOfStr
    })
  }

  module.exports = capitalizeValues