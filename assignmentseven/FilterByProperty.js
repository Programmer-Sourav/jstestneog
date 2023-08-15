function filterByProperty(objects, property) {
    return objects.filter((obj) => obj.hasOwnProperty(property))
  }

  module.exports = filterByProperty