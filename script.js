const buttons = document.querySelectorAll('button');
const display = document.querySelector('#screen');

let displayNumber = 0;
let firstNumber;
let operator;
let secondNumber;

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
            if (buttons[i].className !== 'operator' && !buttons[i].id) { //zwykle liczby
                console.log(buttons[i].className);
                if (displayNumber === firstNumber) {
                    secondNumber = buttons[i].textContent;
                    displayNumber = secondNumber;
                } else {
                    firstNumber = buttons[i].textContent;
                    displayNumber = firstNumber;
                }
                updateDisplay();
            } else if (buttons[i].className === 'operator') {
                operator = buttons[i].textContent;
                let result;
               /* switch (operator) {
                    case '+':
                        result = add(firstNumber, secondNumber);
                    
                } */
            } else if (buttons[i].id) {
                /* switch (buttons[i].id) {
                    case 
                } */
            }
            console.log(`display: ${displayNumber}`);
            console.log(`first: ${firstNumber}`);
            console.log(`operator: ${operator}`);
            console.log(`second: ${secondNumber}`);
        });
    }
}
clickButton();
