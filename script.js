let firstNumber = null, secondNumber = null;
let operator = null;
let editFirstNumber = true;
let finished = false;

const display = document.querySelector("#display");

const clear = document.querySelector("#clearBtn");
const posNeg = document.querySelector("#posNegBtn");
const percent = document.querySelector("#percentBtn");
const divideBtn = document.querySelector("#divide");

const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiplyBtn = document.querySelector("#multiply");

const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minusBtn = document.querySelector("#minus");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plusBtn = document.querySelector("#plus");

const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");

function add(firstNumber, secondNumber) {
    return (parseFloat(firstNumber) + parseFloat(secondNumber));
}
function subtract(firstNumber, secondNumber) {
    return (parseFloat(firstNumber) - parseFloat(secondNumber));
}
function multiply(firstNumber, secondNumber) {
    return (parseFloat(firstNumber) * parseFloat(secondNumber));
}
function divide(firstNumber, secondNumber) {
    return (parseFloat(firstNumber) / parseFloat(secondNumber));
}

function operate(operation, firstNumber, secondNumber) {
        switch(operation) {
            case "add":
                return add(firstNumber, secondNumber);
                break
            case "subtract":
                return subtract(firstNumber, secondNumber);
                break
            case "multiply":
                return multiply(firstNumber, secondNumber);
                break
            case "divide":
                return divide(firstNumber, secondNumber);
                break
        }
}

function reset() {
    editFirstNumber = true;
    firstNumber = null;
    secondNumber = null;
    finished = false;
    display.textContent = "";
}
function numberBtnPress(btnNumber) {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = btnNumber.toString();
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return;
            }
            let number = Array.from(firstNumber);
            number.push(btnNumber.toString());
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = btnNumber.toString();
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return;
            }
            let number = Array.from(secondNumber);
            number.push(btnNumber.toString());
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
}
// --------- event listeners -----------------------------
clear.addEventListener("mousedown", function () {
    reset();
    display.style.fontSize = 80 + "px";
})
posNeg.addEventListener("mousedown", function () {
    if ((editFirstNumber && finished === false) || finished === true) {
        if (firstNumber === null || Number.isNaN(firstNumber)) {
            return;
        }
        firstNumber = (parseFloat(firstNumber) * -1).toString();
        display.textContent = firstNumber;
    } else {
        if (secondNumber === null || Number.isNaN(secondNumber)) {
            return;
        }
        secondNumber = (parseFloat(secondNumber) * -1).toString();
        display.textContent = secondNumber;
    }
})
percent.addEventListener("mousedown", function () {
    if (finished) {
        editFirstNumber = true;
    }
    if (editFirstNumber) {
        if (Number.isNaN(firstNumber) || firstNumber === null) {
            return;
        }
        let placeFirstNumber = parseFloat(firstNumber) * 0.01;
        firstNumber = +placeFirstNumber.toFixed(4);

        display.textContent = firstNumber.toString(); 
    } else {
        if (Number.isNaN(secondNumber) || secondNumber === null) {
            return;
        }
        secondNumber = parseFloat(secondNumber) * 0.01;
        display.textContent = secondNumber.toString();
    }
})
divideBtn.addEventListener("mousedown", function () { 
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "divide";
        finished = false;
    } else if (firstNumber === null) {
        reset()
        return;
    } else {
        let result = operate(operator, firstNumber, secondNumber);
        operator = "divide";
        result = +result.toFixed(5); // found this solution on stackoverflow
        firstNumber = result;
        secondNumber = null;
        editFirstNumber = false;
        display.textContent = result;
    }
})
// --------------------------------------------------
seven.addEventListener("mousedown", function () {
    numberBtnPress(7);
})
eight.addEventListener("mousedown", function () {
    numberBtnPress(8);
})
nine.addEventListener("mousedown", function () {
    numberBtnPress(9);
})
multiplyBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "multiply";
        finished = false;
    } else if (firstNumber === null) {
        reset();
        return;
    } else {
        if (operator === "divide" && secondNumber == 0) {
            reset();
            display.textContent = "nice try";
            return;
        }
        let result = operate(operator, firstNumber, secondNumber);
        operator = "multiply";
        result = +result.toFixed(5); // found this solution on stackoverflow
        firstNumber = result;
        secondNumber = null;
        editFirstNumber = false;
        display.textContent = result;
    }
})
// ------------------------------------------------------
four.addEventListener("mousedown", function () {
    numberBtnPress(4);
})
five.addEventListener("mousedown", function () {
    numberBtnPress(5);
})
six.addEventListener("mousedown", function () {
    numberBtnPress(6);
})
minusBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "subtract";
        finished = false;
    } else if (firstNumber === null) {
        reset();
    } else {
        if (operator === "divide" && secondNumber == 0) {
            reset();
            display.textContent = "nice try";
            return;
        }
        let result = operate(operator, firstNumber, secondNumber);
        operator = "subtract";
        result = +result.toFixed(5); // found this solution on stackoverflow
        firstNumber = result;
        secondNumber = null;
        editFirstNumber = false;
        display.textContent = result;
    }
})
//-------------------------------------------------------
one.addEventListener("mousedown", function () {
    numberBtnPress(1);
})
two.addEventListener("mousedown", function () {
    numberBtnPress(2);
})
three.addEventListener("mousedown", function () {
    numberBtnPress(3);
})
plusBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "add";
        finished = false;
    } else if (firstNumber === null) {
        reset();
        return;
    } else {
        if (operator === "divide" && secondNumber == 0) {
            reset();
            display.textContent = "nice try";
            return;
        }
        let result = operate(operator, firstNumber, secondNumber);
        operator = "add";
        result = +result.toFixed(5); // found this solution on stackoverflow
        firstNumber = result;
        secondNumber = null;
        editFirstNumber = false;
        display.textContent = result;
    }
})
//------------------------------------------------------
zero.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "0";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return;
            }
            let number = Array.from(firstNumber);
            number.push("0");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "0";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return;
            }
            let number = Array.from(secondNumber);
            number.push("0");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
decimal.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "0.";
            display.textContent = firstNumber;
        } else if (firstNumber.includes(".")) {
            return;
        } else {
            let number = Array.from(firstNumber);
            number.push(".");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (finished === true && editFirstNumber === false) {
            firstNumber = firstNumber.toString();
            if (firstNumber.includes(".")) {
                return;
            } else {
                let number = Array.from(firstNumber);
                number.push(".");
                firstNumber = number.join('');
                editFirstNumber = true;
                display.textContent = firstNumber;
                return;
            }
        }
        if (secondNumber === null) {
            secondNumber = "0.";
            display.textContent = secondNumber;
            return;
        } else if (secondNumber.includes(".")) {
            return;
        } else {
            let number = Array.from(secondNumber);
            number.push(".");
            secondNumber = number.join('');
            display.textContent = secondNumber
        }
    }
})
equal.addEventListener("mousedown", function () {
    let result;
    if (firstNumber === null || secondNumber === null) {
        return;
    }
    if (operator === "divide" && secondNumber == 0) {
        reset();
        display.textContent = "nice try";
        return;
    }
    result = operate(operator, firstNumber, secondNumber);
    let len = Math.trunc(result).toString().length;
    if (len > 10) {
        reset();
        display.style.fontSize = 50 + "px";
        display.textContent = "result is too big";
        return;
    } else if (Math.trunc(result).toString().length === 10) {
        result = Math.round(result);
    } else if (len <= 5) {
        result = +result.toFixed(5);
    } else {
        let difference = 10 - len;
        result = +result.toFixed(difference);
    }
    firstNumber = result;
    secondNumber = null;
    editFirstNumber = false;
    finished = true;
    display.textContent = result;
})