const buttons = document.querySelectorAll('button');
const display = document.querySelector('#screen');

let displayNumber = 0;
let firstNumber = 0;
let operator;
let secondNumber = 0;
let result;

const updateDisplay = updatedNumber => {
    displayNumber = updatedNumber;
    display.textContent = displayNumber;
};

const clear = () => {
    updateDisplay(0);
    firstNumber = 0;
    secondNumber = 0;
    operator = undefined;
    result = 0;
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        clear();
        alert("you fool can't divide by 0, i'm erasing number on the screen");
        return 0;
    } else return a / b;
};


const operate = () => {
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
};

updateDisplay(displayNumber);

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].className === 'operand') { //zwykle liczby
                if (!operator) {
                    if (firstNumber === 0) firstNumber = buttons[i].textContent;
                    else firstNumber += buttons[i].textContent;
                    updateDisplay(firstNumber);
                } else {
                    if (secondNumber === 0) secondNumber = buttons[i].textContent; 
                    else secondNumber += buttons[i].textContent;
                    updateDisplay(secondNumber);
                }
            } else if (buttons[i].className === 'operator') {
                operate();
                if (operator) {
                    updateDisplay(result);
                    firstNumber = result;
                    secondNumber = 0;
                }
                operator = buttons[i].textContent;
            } else if (buttons[i].id) {
                switch (buttons[i].id) {
                    case 'result':
                        operate();
                        updateDisplay(result);
                        firstNumber = result;
                        secondNumber = 0;
                        operator = undefined;
                        break;
                    case 'dot':
                        break;
                    case 'sign':
                        updateDisplay(0 - displayNumber);
                        if (displayNumber === firstNumber) firstNumber = 0 - firstNumber;
                        if (displayNumber === secondNumber) secondNumber = 0 - secondNumber;
                        break;
                    case 'percent':
                        updateDisplay(displayNumber / 100);
                        break;
                    case 'clear':
                        clear();
                        break;
                    default:
                        break;
                }
            }
            // my amateur debugging :x
            console.log(`display: ${displayNumber}`);
            console.log(`first: ${firstNumber}`);
            console.log(`operator: ${operator}`);
            console.log(`second: ${secondNumber}`);
            console.log(`result: ${result}`);
            console.log("\n");
        });
    }
}
clickButton();
