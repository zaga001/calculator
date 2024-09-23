const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let num1, num2, operator;

function operate(num1, operator, num2) {
    if (operator === add) return add(num1, num2);
    if (operator === subtract) return subtract(num1, num2);
    if (operator === multiply) return multiply(num1, num2);
    if (operator === divide) return divide(num1, num2);
}

let displayArray = [];
let displayValue;
let display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayArray.push(button.textContent)
        displayValue = displayArray.join('');
        display.textContent = displayValue;
    })
})
