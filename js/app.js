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

// console.log(add(1,10));
// console.log(subtract(1,10));
// console.log(multiply(1,10));
// console.log(divide(1,10));

let number1 = 0;
let number2 = 0;
let operation;
let displayValue = 0;

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

// console.log(operate("_", number1, number2));
console.log(operate("+", number1, number2));
console.log(operate("-", number1, number2));
console.log(operate("*", number1, number2));
console.log(operate("/", number1, number2));

// Selects the display
let display = document.querySelector("#display");
display.innerHTML = "";

// Selects the operands (numbers) and add a event when you clicked on them
//  Show the value on the display and saved in a variable
const operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    display.innerHTML += operand.value;
    displayValue = parseInt(display.innerHTML);
  });
});

// Selects the operators and add a event when you click on them
//  save the number in number1 (variable), clean the display and 
//  save the operator in operation (variable)
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    number1 = displayValue;
    display.innerHTML = "";
    operation = operator.value;
  });
});

// When the user clicks on the equal, save the number in number2 (variable)
//  and show the solution in the display
const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  number2 = displayValue;
  display.innerHTML = operate(operation, number1, number2);
});
