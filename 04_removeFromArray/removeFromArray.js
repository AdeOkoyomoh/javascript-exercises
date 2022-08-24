const removeFromArray = function(array, toBeRemoved) {
  for (const argument of arguments) {
    for (const element of array) {
      if (element === argument) {
        array.splice(array.indexOf(element), 1);
      }
    }
  }
  return array;
};  

// Do not edit below this line
module.exports = removeFromArray;
