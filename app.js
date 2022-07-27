// Theme

let darkTheme = document.querySelector('.dark_Theme')

const darkThemeFunction = () => {
  document.body.classList.add('dark');
}
darkTheme.addEventListener('click', darkThemeFunction);

let lightTheme = document.querySelector('.light_Theme')

const lightThemefunction = () => {
  document.body.classList.remove('dark');
}

lightTheme.addEventListener('click', lightThemefunction);

// END OF THEME

// eg 2 + 4

// firstoperand = 2;
// operator = +
//  secondoperand = 4;

////////Calculator main functionallities
// displayValue hold a string value of what is being displayed

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};
  

  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      // Overwrite `displayValue` if the current value is '0' otherwise append to it
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }
  
function inputDecimal(dot) {
    // If the `displayValue` property does not contain a decimal point
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
        calculator.waitingForSecondOperand = false;
        return
  }
  // fix decimal bug
    // Append the decimal point
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
function handleOperator(nextOperator) {


      // Destructure the properties on the calculator object
  const { firstOperand, displayValue, operator } = calculator
   // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
    const inputValue = parseFloat(displayValue);
      // verify that `firstOperand` is null and that the `inputValue`
  // is not a `NaN` value
  // if two operators are hit consecutively
  if (operator && calculator.waitingForSecondOperand) {
      // Update the firstOperand property
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
  
  
  if (firstOperand == null && !isNaN(inputValue)) {
      // Update the firstOperand property
      calculator.firstOperand = inputValue;      // when a user hits two operator
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = `${parseFloat(result.toFixed())}`;
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }
  
function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }
  
  function updateDisplay() {
    const display = document.querySelector('#calculator_display');
    // select the element with class of `calculator-display`
    display.value = calculator.displayValue;
    // update the value of the element with the contents of `displayValue`
  }
  
updateDisplay();
  
  // listening fot click event 
  
  const keys = document.querySelector('#keys_container');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          handleOperator(value);
          break;
        case '.':
          inputDecimal(value);
          break;
        case 'all-clear':
          resetCalculator();
          break;
        default:
          // check if the key is an integer
          if (Number.isInteger(parseFloat(value))) {
            inputDigit(value);
          }
      }
    
      updateDisplay();
  });

let backspace = [];

function backSpaceFunction(){
 
}


