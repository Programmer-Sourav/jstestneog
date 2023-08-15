
/*export*/ function transformKeys(obj) {
    return Object.keys(obj).map((key) => key.toUpperCase())
  }

  module.exports = transformKeys