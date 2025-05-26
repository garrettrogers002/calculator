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
    secondNumber = null
    display.textContent = "";
}
// --------- event listeners -----------------------------
clear.addEventListener("mousedown", function () {
    reset();
    display.style.fontSize = 80 + "px";
})
posNeg.addEventListener("mousedown", function () {
    if (editFirstNumber && finished === false) {
        if (firstNumber === null || Number.isNaN(firstNumber)) {
            return
        }
        let number = Array.from(firstNumber);
        if (number[0] !== "-") {
            number.unshift("-");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        } else {
            number.shift();
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else if (finished === true) {
        let number = [...firstNumber.toString()];
        if (number[0] !== "-") {
            number.unshift("-");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        } else {
            number.shift();
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null || Number.isNaN(secondNumber)) {
            return
        }
        let number = Array.from(secondNumber);
        if (number[0] !== "-") {
            number.unshift("-")
            secondNumber = number.join('');
            display.textContent = secondNumber;
        } else {
            number.shift();
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
percent.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (Number.isNaN(firstNumber) || firstNumber === null) {
            return
        }
        firstNumber = parseFloat(firstNumber) * 0.01;
        display.textContent = firstNumber.toString(); 
    } else {
        if (Number.isNaN(secondNumber)) {
            return
        }
        secondNumber = parseFloat(secondNumber) * 0.01;
        display.textContent = secondNumber.toString();
    }
})
divideBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "divide";
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
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "7";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("7");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "7";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("7");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
eight.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "8";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("8");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "8";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("8");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
nine.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "9";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("9");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "9";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("9");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
multiplyBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "multiply";
    } else {
        if (operator === "divide" && secondNumber == 0) {
            reset();
            display.textContent = "nice try";
            return
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
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "4";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("4");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "4";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("4");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
five.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "5";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("5");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "5";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("5");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
six.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "6";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("6");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "6";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("6");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
minusBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "subtract";
    } else {
        if (operator === "divide" && secondNumber == 0) {
            reset();
            display.textContent = "nice try";
            return
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
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "1";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("1");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "1";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("1");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
two.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "2";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("2");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "2";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("2");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
three.addEventListener("mousedown", function () {
    display.style.fontSize = 80 + "px";
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "3";
            display.textContent = firstNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(firstNumber);
            number.push("3");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "3";
            display.textContent = secondNumber;
        } else {
            if (firstNumber.length === 10) {
                return
            }
            let number = Array.from(secondNumber);
            number.push("3");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
plusBtn.addEventListener("mousedown", function () {
    if (secondNumber === null) {
        editFirstNumber = false;
        operator = "add";
    } else {
        if (operator === "divide" && secondNumber == 0) {
            reset();
            display.textContent = "nice try";
            return
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
                return
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
                return
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
        if (firstNumber.includes(".")) {
            return
        } else {
            let number = Array.from(firstNumber);
            number.push(".");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber.includes(".")) {
            return
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
        return
    }
    if (operator === "divide" && secondNumber == 0) {
        reset();
        display.textContent = "nice try";
        return
    }
    result = operate(operator, firstNumber, secondNumber);
    // console.log(lengthVar.length);
    if (Math.trunc(result).toString().length > 10) {
        console.log(result);
        console.log(`length is ${result.toString().length}`);
        reset();
        display.style.fontSize = 50 + "px";
        display.textContent = "result is too big";
        return
    } else if (Math.trunc(result).toString().length === 10) {
        result = Math.round(result);
    } else if (Math.trunc(result).toString().length === 9) {
        result = +result.toFixed(1);
    } else if (Math.trunc(result).toString().length === 8) {
        result = +result.toFixed(2);
    } else if (Math.trunc(result).toString().length === 7) {
        result = +result.toFixed(3);
    } else if (Math.trunc(result).toString().length === 6) {
        result = +result.toFixed(4);
    } else if (Math.trunc(result).toString().length <= 5) {
        result = +result.toFixed(5);
    }
    firstNumber = result;
    secondNumber = null;
    editFirstNumber = false;
    finished = true;
    display.textContent = result;
})