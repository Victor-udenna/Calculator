

// let disPlay = document.getElementById('calculator_display');
// let Btn = document.querySelector('#keys_container');
// Btn.addEventListener('click', function (e) {
//     const target = e.target;
//     if (target.matches('.calculator_key')) {
//        disPlay.append(e.target.innerText) 
//     }
    
// })



// Theme
let backgroundColor = document.querySelector('.container')
let Header = document.querySelector('header');
let inPut = document.querySelector('#calculator_display');
let keyContainer = document.querySelector('#keys_container');
let theme_btncontainer = document.querySelector('.theme_btn_container');
let themeContainer = document.querySelector('.theme_btn_container');
// BUTTON VARIABLE
let btn_0 = document.querySelector('.zero');
let btn_1 = document.querySelector('.one');
let btn_2 = document.querySelector('.two');
let btn_3 = document.querySelector('.three');
let btn_4 = document.querySelector('.four');
let btn_5 = document.querySelector('.five');
let btn_6 = document.querySelector('.six');
let btn_7 = document.querySelector('.seven');
let btn_8 = document.querySelector('.eight');
let btn_9 = document.querySelector('.nine');
let btn_plus = document.querySelector('.plus');
let btn_minus = document.querySelector('.minus');
let btn_divide = document.querySelector('.divide');
let btn_times = document.querySelector('.times');
let btn_clear = document.querySelector('.all-clear');
let btn_dot = document.querySelector('.decimal');
let btn_backspace = document.querySelector('.backspace');
let btn_openbracket = document.querySelector('.open-bracket');
let btn_closebracket = document.querySelector('.close-bracket');
// ......


// LIGHT THEME
let lightThemeBtn = document.getElementById('light_Theme');

function light_Themefnc() {
    backgroundColor.style.backgroundColor = 'gray';
    Header.style.backgroundColor = '#f2f2f4';
    Header.style.color = '#000';
    theme_btncontainer.style.backgroundColor = "";
    inPut.style.backgroundColor = '#f2f2f4';
    inPut.style.borderColor = '#f2f2f4';
    inPut.style.color = '#000';
    keyContainer.style.backgroundColor = '#fff';
    themeContainer.style.backgroundColor = '#5ebee0';
    themeContainer.style.color = 'white';
    // Buttons
    btn_0.style.color = "#000";
    btn_0.style.backgroundColor = '#fff';
    btn_1.style.color = "#000";
    btn_1.style.backgroundColor = '#fff';
    btn_2.style.color = "#000";
    btn_2.style.backgroundColor = '#fff';
    btn_3.style.color = "#000";
    btn_3.style.backgroundColor = '#fff';
    btn_4.style.color = "#000";
    btn_4.style.backgroundColor = '#fff';
    btn_5.style.color = "#000";
    btn_5.style.backgroundColor = '#fff';
    btn_6.style.color = "#000";
    btn_6.style.backgroundColor = '#fff';
    btn_7.style.color = "#000";
    btn_7.style.backgroundColor = '#fff';
    btn_8.style.color = "#000";
    btn_8.style.backgroundColor = '#fff';
    btn_9.style.color = "#000";
    btn_9.style.backgroundColor = '#fff';
    btn_backspace.style.color = "#000";
    btn_backspace.style.backgroundColor = '#fff';
    btn_minus.style.color = "#000";
    btn_minus.style.backgroundColor = '#fff';
    btn_divide.style.color = "#000";
    btn_divide.style.backgroundColor = '#fff';
    btn_times.style.color = "#000";
    btn_times.style.backgroundColor = '#fff';
    btn_plus.style.color = "#000";
    btn_plus.style.backgroundColor = '#fff';
    btn_closebracket.style.color = "#000";
    btn_closebracket.style.backgroundColor = '#fff';
    btn_openbracket.style.color = "#000";
    btn_openbracket.style.backgroundColor = '#fff';
    btn_dot.style.color = "#000";
    btn_dot.style.backgroundColor = '#fff';
    btn_clear.style.color = "#ba3939";
    btn_clear.style.backgroundColor = '#fff';


}

lightThemeBtn.addEventListener('click', light_Themefnc);

let darkThemeBtn = document.querySelector('#dark_Theme');

function darktheme_function() {
    backgroundColor.style.backgroundColor = 'whitesmoke';
    Header.style.backgroundColor = '#10243c';
    Header.style.color = '#fff';
    theme_btncontainer.style.backgroundColor = "";
    inPut.style.backgroundColor = '#10243c';
    inPut.style.borderColor = '#20c4fc';
    inPut.style.color = '#fff';
    keyContainer.style.backgroundColor = '#102444';
    themeContainer.style.backgroundColor = '#ffffff7e';
    themeContainer.style.color = 'white';
    // Buttons
    btn_0.style.color = "#fff";
    btn_0.style.backgroundColor = '#102444';
    btn_1.style.color = "#fff";
    btn_1.style.backgroundColor = '#102444';
    btn_2.style.color = "#fff";
    btn_2.style.backgroundColor = '#102444';
    btn_3.style.color = "#fff";
    btn_3.style.backgroundColor = '#102444';
    btn_4.style.color = "#fff";
    btn_4.style.backgroundColor = '#102444';
    btn_5.style.color = "#fff";
    btn_5.style.backgroundColor = '#102444';
    btn_6.style.color = "#fff";
    btn_6.style.backgroundColor = '#102444';
    btn_7.style.color = "#fff";
    btn_7.style.backgroundColor = '#102444';
    btn_8.style.color = "#fff";
    btn_8.style.backgroundColor = '#102444';
    btn_9.style.color = "#fff";
    btn_9.style.backgroundColor = '#102444';
    btn_backspace.style.color = "#fff";
    btn_backspace.style.backgroundColor = '#102444';
    btn_minus.style.color = "#fff";
    btn_minus.style.backgroundColor = '#102444';
    btn_divide.style.color = "#fff";
    btn_divide.style.backgroundColor = '#102444';
    btn_times.style.color = "#fff";
    btn_times.style.backgroundColor = '#102444';
    btn_plus.style.color = "#fff";
    btn_plus.style.backgroundColor = '#102444';
    btn_closebracket.style.color = "#fff";
    btn_closebracket.style.backgroundColor = '#102444';
    btn_openbracket.style.color = "#fff";
    btn_openbracket.style.backgroundColor = '#102444';
    btn_dot.style.color = "#fff";
    btn_dot.style.backgroundColor = '#102444';
    btn_clear.style.color = "#ba3939";
    btn_clear.style.backgroundColor = '#102444';
    
}

darkThemeBtn.addEventListener('click', darktheme_function);

// END OF THEME


////////Calculator main functionallities


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
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }
  
function inputDecimal(dot) {
    
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
        calculator.waitingForSecondOperand = false;
        return
    }

    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
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
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
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


