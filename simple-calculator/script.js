let firstOperand = '';
let secondOperand = '';
let selectedOperator = null;
let shouldResetScreen = false;

const output = document.querySelector('.output');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation');
const decimalButton = document.querySelector('.btn--decimal');
const equalsButton = document.querySelector('.btn--equal');
const allClearButton = document.querySelector('.btn--all-clear');
const delButton = document.querySelector('.btn--del');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    appendNumber(number);
  });
})

function resetScreen() {
  currentOperand.textContent = '';
  shouldResetScreen = false;
}

function appendNumber(number) {
  if (currentOperand.textContent === '0' || shouldResetScreen) {
    resetScreen();
  }
  // if (currentOperand.textContent === '0' && selectedOperator !== '') {
  //   currentOperand = '';
  // }
  currentOperand.textContent += number;
}

delButton.addEventListener('click', delNumber)

function delNumber() {
  let currentValue = currentOperand.textContent;
  let newValue = currentValue.slice(0, -1);
  currentOperand.textContent = newValue; // set the text content of currentOperand as the value of newValue
}

allClearButton.addEventListener('click', clearNumber);

function clearNumber() {
  currentOperand.textContent = '';
  previousOperand.textContent = '';
  firstOperand = '';
  secondOperand = '';
  selectedOperator = null;
}

decimalButton.addEventListener('click', addDecimalPoint);

function addDecimalPoint() {
  if (shouldResetScreen) {
    resetScreen();
  }
  if (currentOperand.textContent === '') {
    currentOperand.textContent = '0';
  }
  // check if the currentOperand doesn't already have a decimal point
  //if it doesn't, appending a decimal point to the currentOperand
  if (!currentOperand.textContent.includes('.')) {
    currentOperand.textContent += '.';
  }
}

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => addOperator(button.textContent)
  ))

function addOperator(operator) {
  if (selectedOperator !== null) {
    compute();
  }
  firstOperand = currentOperand.textContent;
  selectedOperator = operator;
  previousOperand.textContent = `${firstOperand} ${selectedOperator}`;
  currentOperand.textContent = '';
  shouldResetScreen = true;
};


equalsButton.addEventListener('click', compute);

function compute() {
  if (selectedOperator === null || shouldResetScreen) return;
  if (selectedOperator === '÷' && currentOperand.textContent === '0') {
    alert("You can't divide by 0 :( ");
    return;
  }
  secondOperand = currentOperand.textContent;
  let result = roundNumber(operate(selectedOperator, firstOperand, secondOperand));
  currentOperand.textContent = result;
  previousOperand.textContent = `${firstOperand} ${selectedOperator} ${secondOperand} =`;
  selectedOperator = null;
}

function roundNumber(number) {
  return Math.round(number * 1000) / 1000
}

// add event listener for keydown on the document
document.addEventListener('keydown', keyboardInput);

function keyboardInput(event) {
  if (event.key >= 0 && event.key <= 9) {
    appendNumber(event.key.toString()); //passing string type of the key-typed number into the function
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    addOperator(convertOperator(key));
  } else if (event.key === '.') {
    addDecimalPoint();
  } else if (event.key === 'Enter' || event.key === '=') {
    compute();
  } else if (event.key === 'Backspace') {
    delNumber();
  } else if (event.key === 'Escape') {
    clearNumber();
  }
}

function convertOperator(key) {
  if (key === '/') return '÷';
  else if (key === '*') return '×';
  else if (key === '+') return '+';
  else if (key === '-') return '−';
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return subtract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return Infinity
      else return divide(a, b)
    default:
      return null
  }
}
