

function myMathAssignment(num1, num2, word) {
  if (word === "add" ) {
      return num1 + num2;
  }else if(word === "multiply"){
      return num1 * num2;
  }else if (word === "division") {
      return num1 / num2;
  }
}

console.log(myMathAssignment(23, 24, "division"));

function multiplyMe(value) {
  if(isNaN(value)) {
      return 'value must be a number';
  }
  return value * 2;
}
console.log(multiplyMe("nvx"));

multiplyMe = (value) => {
  if(isNaN(value)){
      return 'value must be a number';
  }
  return value * 2;
}
console.log(multiplyMe(67));

var age = 20;
function sam() {
   age = 10;
  console.log(sam());
}

samFrexz = (a, b) => {
  return a + b;
}
console.log(samFrexz(4,5));

myMathAssignment = (num1, num2, stringWord) => {
  if(stringWord === "add"){
      return num1 + num2;
  }
}
console.log(myMathAssignment(20, 20, "add"));

const age = 55;
if(age >= 18 || age < 45) {
  console.log("youth")
}else if(age > 44) {
  console.log("senior")
}
else {
  console.log('adult')
}
