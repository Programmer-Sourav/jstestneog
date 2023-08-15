function filterUniqueStrings(strings) {
    return strings.filter((str, index, arr) => arr.indexOf(str) === index)
  }


module.exports = filterUniqueStrings