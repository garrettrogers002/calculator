let firstNumber = null, secondNumber = null;

let editFirstNumber = true;

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
// --------- event listeners -----------------------------
clear.addEventListener("mousedown", function () {
    editFirstNumber = true;
    firstNumber = null;
    secondNumber = null
    display.textContent = "";
})
posNeg.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        let number = Array.from(firstNumber);
        if (number[0] !== "-") {
            number.unshift("-")
            firstNumber = number.join('');
            display.textContent = firstNumber;
        } else {
            number.shift();
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    }
})
percent.addEventListener("mousedown", function () {

})
divideBtn.addEventListener("mousedown", function () {

})
// --------------------------------------------------
seven.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "7";
            display.textContent = firstNumber;
        } else {
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
            let number = Array.from(secondNumber);
            number.push("7");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
eight.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "8";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("8");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "8";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("8");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
nine.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "9";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("9");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "9";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("9");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
multiplyBtn.addEventListener("mousedown", function () {

})
// ------------------------------------------------------
four.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "4";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("4");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "4";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("4");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
five.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "5";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("5");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "5";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("5");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
six.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "6";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("6");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "6";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("6");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
minusBtn.addEventListener("mousedown", function () {

})
//-------------------------------------------------------
one.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "1";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("1");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "1";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("1");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
two.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "2";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("2");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "2";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("2");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
three.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "3";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("3");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "3";
            display.textContent = secondNumber;
        } else {
            let number = Array.from(secondNumber);
            number.push("3");
            secondNumber = number.join('');
            display.textContent = secondNumber;
        }
    }
})
plusBtn.addEventListener("mousedown", function () {

})
//------------------------------------------------------
zero.addEventListener("mousedown", function () {
    if (editFirstNumber) {
        if (firstNumber === null) {
            firstNumber = "0";
            display.textContent = firstNumber;
        } else {
            let number = Array.from(firstNumber);
            console.log(firstNumber);
            number.push("0");
            firstNumber = number.join('');
            display.textContent = firstNumber;
        }
    } else {
        if (secondNumber === null) {
            secondNumber = "0";
            display.textContent = secondNumber;
        } else {
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

})