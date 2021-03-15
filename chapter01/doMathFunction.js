// the doMath function has three parameters, two of which are numbers and the third one returns the answer

doMath = (numOne, numTwo, returnString) => {
  if (returnString === 'add') {
    return numOne + numTwo;
  }
  if (returnString === 'multiply') { 
    return numOne * numTwo;
  }
  if (returnString === 'division') {
    return numOne / numTwo;
  } 
}

console.log(doMath(54, 2, 'division'));