// Adds 
function add(a, b) {
  return a + b;
}

// Subtracts 
function subtract(a, b) {
  return a - b;
}

// Multiplies 
function multiply(a, b) {
  return a * b;
}

// Divides 
function divide(a, b) {
  // Check b is not zero
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: Division by zero";
  }
}
// ====================================================


function inform(firstName, location, hobby) {
  console.log("Hi, my name is " + firstName + ". I live in " + location + " and enjoy " + hobby + ".");
}

inform("Guy", "Nakhonsawan", "Listen to music");


