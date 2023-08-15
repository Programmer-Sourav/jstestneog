 function removeVowels(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return arr.map((str) =>
      str
        .split('')
        .filter((char) => !vowels.includes(char))
        .join(''),
    )
  }

  module.exports = removeVowels