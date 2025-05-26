let firstNumber, secondNumber;

const clear = document.querySelector("#clearBtn");
const posNeg = document.querySelector("#posNegBtn");
const percent = document.querySelector("#percentBtn");
const divideBtn = document.querySelector("#divide");

const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("nine");
const multiplyBtn = document.querySelector("multiply");

const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("six");
const minusBtn = document.querySelector("minus");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plusBtn = document.querySelector("#plus");

const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("equal");

function add(firstNumber, secondNumber) {
    return (parseInt(firstNumber) + parseInt(secondNumber));
}
function subtract(firstNumber, secondNumber) {
    return (parseInt(firstNumber) - parseInt(secondNumber));
}
function multiply(firstNumber, secondNumber) {
    return (parseInt(firstNumber) * parseInt(secondNumber));
}
function divide(firstNumber, secondNumber) {
    return (parseInt(firstNumber) / parseInt(secondNumber));
}

function operate(operation, firstNumber, secondNumber) {
        switch(operation) {
            case "add":
                add(firstNumber, secondNumber);
                break
            case "subtract":
                subtract(firstNumber, secondNumber);
                break
            case "multiply":
                multiply(firstNumber, secondNumber);
                break
            case "divide":
                divide(firstNumber, secondNumber);
                break
        }
}

clear.addEventListener("mousedown", function () {

})
posNeg.addEventListener("mousedown", function () {

})
percent.addEventListener("mousedown", function () {

})
divideBtn.addEventListener("mousedown", function () {

})
// --------------------------------------------------
seven.addEventListener("mousedown", function () {

})
eight.addEventListener("mousedown", function () {

})
nine.addEventListener("mousedown", function () {

})
multiplyBtn.addEventListener("mousedown", function () {

})
// ------------------------------------------------------
four.addEventListener("mousedown", function () {

})
five.addEventListener("mousedown", function () {

})
six.addEventListener("mousedown", function () {

})
minusBtn.addEventListener("mousedown", function () {

})
//-------------------------------------------------------
one.addEventListener("mousedown", function () {

})
two.addEventListener("mousedown", function () {

})
three.addEventListener("mousedown", function () {

})
plusBtn.addEventListener("mousedown", function () {

})
//------------------------------------------------------
zero.addEventListener("mousedown", function () {

})
decimal.addEventListener("mousedown", function () {

})
equal.addEventListener("mousedown", function () {

})