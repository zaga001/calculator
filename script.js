const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num2 === 0) return 'skibidi';
    return num1 / num2;
}

let num1 = null, num2 = null, operator = null;

function operate(num1, operator, num2) {
    let result;
    if (operator === '+') result = add(num1, num2);
    if (operator === '-') result = subtract(num1, num2);
    if (operator === '*') result = multiply(num1, num2);
    if (operator === '/') result = divide(num1, num2);
    return Math.round(result * 1000) / 1000;
}

let opClicked = false;
let displayArray = [];
let displayValue;
let display = document.querySelector('.display');

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (opClicked) {
            displayArray = [];
            opClicked = false;
        }
        displayArray.push(button.textContent)
        displayValue = displayArray.join('');
        display.textContent = displayValue;
    })
})

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 != null && operator != null && !opClicked) {
            num2 = Number(displayValue); 
            let result = operate(num1, operator, num2);
            display.textContent = result;
            num1 = result;
        } else {
            num1 = Number(displayValue);
        }
        operator = button.textContent
        opClicked = true;
    })
})

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    if (!displayArray.includes('.')) {
        displayArray.push('.')
        displayValue = displayArray.join('');
        display.textContent = displayValue;
    }
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (num1 !== null && operator !== null) {
        num2 = Number(displayValue);
        display.textContent = operate(num1, operator, num2);
        num1 = null;
        operator = null;
        opClicked = true;
    }
})

const ceButton = document.querySelector('#CE');
ceButton.addEventListener('click', () => {
    display.textContent = '';
    displayArray = [];
    displayValue = '';
})

const acButton = document.querySelector('#AC');
acButton.addEventListener('click', () => {
    display.textContent = '';
    displayArray = [];
    num1 = null;
    num2 = null;
    operator = null;
})


//round decimals