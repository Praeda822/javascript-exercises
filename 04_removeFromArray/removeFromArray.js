const removeFromArray = function (array, ...elements) {
  return array.filter(function (e) {
    return !elements.includes(e);
  });
};

removeFromArray([1, 2, 3, 4], 2, 3); // should remove 2 & 3 and return [1,4]

// Do not edit below this line
module.exports = removeFromArray;
