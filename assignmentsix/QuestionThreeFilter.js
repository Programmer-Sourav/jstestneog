const isPalindromic = (num) => {
  const strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
};

 const palindromicNumbers = (numbers) => {
  return numbers.filter(isPalindromic);
};

  module.exports = {palindromicNumbers, isPalindromic}