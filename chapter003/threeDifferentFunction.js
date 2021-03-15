// an arrow function that generates random number
generateRandomNumber = () => {
  return Math.random(45,56,8,1,65,455) + 1;
}

console.log(generateRandomNumber());

// a function  declaration that gets the highest number
function getHighestNumber  () {
  return Math.max(23, 45, 56, 6, 44);
}

console.log(getHighestNumber());

// a function expression that gets the highest number
const getLowestNumber = function () {
  return Math.min(23, 45, 56, 6, 2);
}

console.log(getLowestNumber());
