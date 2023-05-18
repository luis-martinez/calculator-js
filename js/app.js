// Adds 2 numbers
function add (num1, num2){
  return num1 + num2;
}

// Subtract 2 numbers
function subtract (num1, num2){
  return num1 - num2;
}

// Multiply 2 numbers
function multiply (num1, num2){
  return num1 * num2;
}

// Divide 2 numbers
function divide (num1, num2){
  return num1 / num2;
}

let number = 0;
let operation;
let total = 0;
let firstNumber = true;
let firstOperator = true;
let gotTotal = false;

// Operate 2 numbers with the operator and return the result
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
    default:
      alert(`Not valid operator for ${operator}`);
      break;
  }
  return solution;
}

// Selects the display
let display = document.querySelector("#display");
display.innerHTML = "";

// Selects the operands (numbers) and add a event when you clicked on them
//  Show the value on the display and saved in a variable
const operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    // display.innerHTML += operand.value;
    // number = parseInt(display.innerHTML);

    if (firstNumber) {
      display.innerHTML = "";
      display.innerHTML += operand.value;
      number = parseInt(display.innerHTML);
      firstNumber = false;
    } else {
      if (gotTotal) {
        display.innerHTML = operand.value;
        number = parseInt(display.innerHTML);
        gotTotal = false;
      } else {
        display.innerHTML += operand.value;
        number = parseInt(display.innerHTML);
      }
      // display.innerHTML += operand.value;
      // number = parseInt(display.innerHTML);
    }
    operators.forEach((operator) => {
      operator.style.backgroundColor = "#EFEFEF";
    });
  });
});

// Selects the operators and add a event when you click on them
//  save the number in number1 (variable), clean the display and 
//  save the operator in operation (variable)
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    // number = displayValue;
    // display.innerHTML = "";
    // operation = operator.value;

    if (firstOperator) {
      total = number;
      display.innerHTML = total;
      firstOperator = false;
      gotTotal = true;
      operation = operator.value;
    } else {
      total = operate(operation, total, number);
      display.innerHTML = total;
      gotTotal = true;
      operation = operator.value;
    }
    operator.style.backgroundColor = "#B4E4FF";
  });
});

// When the user clicks on the equal, save the number in number2 (variable)
//  and show the solution in the display
const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  display.innerHTML = operate(operation, total, number);
  firstNumber = true;
  firstOperator = true;
  gotTotal = false;
  number = 0;
  total = 0;
});
