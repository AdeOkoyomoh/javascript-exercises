const reverseString = function(string) {
  let arrayedString = string.split("");
  let reversedArrayedString = arrayedString.reverse();
  let reversedString = reversedArrayedString.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
