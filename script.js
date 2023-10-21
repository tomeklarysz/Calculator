const buttons = document.querySelectorAll('button');
const display = document.querySelector('#screen');

let displayNumber;
let firstNumber = 0;
let operator;
let secondNumber = 0;
let result;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// const operate;

function updateDisplay() {
    display.textContent = displayNumber;
}

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].className === 'operand') { //zwykle liczby
                console.log(buttons[i].className);
                if (!operator) {
                    if (firstNumber === 0) firstNumber = buttons[i].textContent;
                    else firstNumber += buttons[i].textContent;
                    displayNumber = firstNumber;
                } else {
                    if (secondNumber === 0) secondNumber = buttons[i].textContent;
                    // else if (result) 
                    else secondNumber += buttons[i].textContent;
                    displayNumber = secondNumber;
                }
                updateDisplay();
            } else if (buttons[i].className === 'operator') {
                operator = buttons[i].textContent;
            } else if (buttons[i].id) {
                switch (buttons[i].id) {
                    case 'result':
                        firstNumber = +firstNumber;
                        secondNumber = +secondNumber;
                        switch (operator) {
                            case '+':
                                result = add(firstNumber, secondNumber);
                                break;
                            case '-':
                                result = subtract(firstNumber, secondNumber);
                                break;
                            case '*':
                                result = multiply(firstNumber, secondNumber);
                                break;
                            case '/':
                                result = divide(firstNumber, secondNumber);
                                break; 
                        }
                        displayNumber = result;
                        updateDisplay();
                        firstNumber = result;
                        secondNumber = 0;
                        operator = undefined;
                        break;
                    case 'dot':
                        break;
                    case 'sign':
                        displayNumber = 0 - displayNumber;
                        updateDisplay();
                        if (displayNumber === firstNumber) firstNumber = 0 - firstNumber;
                        if (displayNumber === secondNumber) secondNumber = 0 - secondNumber;
                        break;
                    case 'percent':
                        displayNumber /= 100;
                        updateDisplay();
                        break;
                    case 'clear':
                        displayNumber = 0;
                        updateDisplay();
                        firstNumber = 0;
                        secondNumber = 0;
                        operator = undefined;
                        break;
                    default:
                        break;
                }
            }
            console.log(`display: ${displayNumber}`);
            console.log(`first: ${firstNumber}`);
            console.log(`operator: ${operator}`);
            console.log(`second: ${secondNumber}`);
            console.log(`result: ${result}`);
        });
    }
}
clickButton();
