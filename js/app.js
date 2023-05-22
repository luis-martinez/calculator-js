// Initialize variables
//  Number display on screen
let number = 0;
// Operator
let operation = "";
// Total of the operation
let total = 0;
// Introduced the first number
let firstNumber = true;
// Introduced the first operator
let firstOperator = true;
// If we have the total of the operation
let gotTotal = false;

//Initialize the calculator
function initializeCalculator() {
  number = 0;
  operation = "";
  total = 0;
  firstNumber = true;
  firstOperator = true;
  gotTotal = false;
  dot.disabled = false;
}

// Round a number with default amount of decimals if it is not provided
function myRound (number, decimals = 5){
  return +(Math.round(+(number.toFixed(decimals) + "e+" + decimals)) + "e-" + decimals);
}

// Adds 2 numbers
function add (num1, num2){
  return myRound(num1 + num2);
}

// Subtract 2 numbers
function subtract (num1, num2){
  return myRound(num1 - num2);
}

// Multiply 2 numbers
function multiply (num1, num2){
  return myRound(num1 * num2);
}

// Divide 2 numbers
function divide (num1, num2){
  return (num2 !== 0) ?  myRound(num1 / num2) : "Error";
}

// Percentage 2 numbers
function percentage (num) {
  return myRound(num / 100);
}

// Operate 2 numbers, and return the result
function operate (operator, num1, num2){
  let solution = 0;
  switch (operator) {
    case "+":
      solution = add(num1, num2);
      break;
    case "-":
      solution = subtract(num1, num2);
      break;
    case "*":
      solution = multiply(num1, num2);
      break;
    case "/":
      solution = divide(num1, num2);
      break;
    case "%":
      solution = percentage(num1);
      break;
    default:
      // alert(`Not valid operator for ${operator}`);
      solution = "Error";
      break;
  }
  return solution;
}

// Selects the display
let display = document.querySelector("#display");
display.innerHTML = "";

// Reset the buttons to their initial background color values
function resetButtonsColor(){
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.backgroundColor = "#EFEFEF";
  });
}

// Selects the operands (numbers) and add a event when you clicked on them.
//  Show the value on the display and saved in a variable
const operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    if (firstNumber) {
      display.innerHTML = "";
      display.innerHTML += operand.value;
      firstNumber = false;
    } else {
      // If we are done adding numbers
      if (gotTotal) {
        display.innerHTML = operand.value;
        gotTotal = false;
      } else {
        // We are adding numbers
        // If we delete all the numbers
        if (number === 0) {
          display.innerHTML = "";
        }
        display.innerHTML += operand.value;
      }
    }
    number = Number(display.innerHTML);
    // Reset the buttons to their initial background color values
    resetButtonsColor();
  });
});

// Selects the operators and add a event when you click on them,
//  save the number in number (variable), clean the display, and 
//  save the operator in operation (variable)
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    // If it's the first operator
    if (firstOperator) {
      total = number;
      firstOperator = false;
    } else {
      total = operate(operation, total, number);
    }
    display.innerHTML = total;
    operation = operator.value;
    gotTotal = true;
    operator.style.backgroundColor = "#B4E4FF";
    dot.disabled = false;
  });
});

// When the user clicks on the "=" button, save the number in number (variable)
//  and show the solution in the display
const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  display.innerHTML = operate(operation, total, number);
  // Initialize the calculator
  initializeCalculator();
  // Reset the buttons to their initial background color values
  resetButtonsColor();
});

// When the user clicks on "AC" button,
//  initialize the calculator
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  display.innerHTML = "";
  initializeCalculator();
});

// When the user clicks "." button,
//  wants to add decimals to the number,
//  prevents add more dots
const dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
  dot.disabled = true;
});

// When the user clicks "DEL" button,
//  deletes a digit (number or dot)
const del = document.querySelector("#delete");
del.addEventListener("click", () => {
  // Converts the number to string
  let auxNumber = number.toString();
  // Delete the last character of the string (number), 
  //  and converts into a number
  number = Number(auxNumber.slice(0, -1));
  // If the last digit is 0
  //  then displays 0
  //  else displays the rest of the number
  (number === 0) ? display.innerHTML = 0 : display.innerHTML = number;
});
