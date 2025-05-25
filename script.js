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