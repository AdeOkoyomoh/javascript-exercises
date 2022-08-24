const sumAll = function(startingNumber, endingNumber) {
  let numbersBetween = [];
  if (startingNumber > 0 && typeof startingNumber === 'number' && endingNumber > 0 && typeof endingNumber === 'number') {
    if (startingNumber < endingNumber) {
      for (let i = startingNumber; i <= endingNumber; i++) {
        numbersBetween.push(i);
      }
    } else {
      for (let i = startingNumber; i >= endingNumber; i--) {
        numbersBetween.push(i);
      }
    }
  } else {
    return 'ERROR';
  }
  
  console.log(numbersBetween);
  
  let result = 0;
  for (let i = 0; i < numbersBetween.length; i++) {
    result += numbersBetween[i];
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
