const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (isNaN(a) || isNaN(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  // Ensure a is the smaller number
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  // Calculate the sum using the formula
  return ((b - a + 1) * (a + b)) / 2;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
