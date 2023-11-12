let operator = "";
let previousValue = "";
let currentValue = "";


document.addEventListener("DOMContentLoaded", function () {
    let clearBtn = document.querySelector("#clear");
    console.log(clearBtn)
    let deleteBtn = document.querySelector("#delete");
    console.log(deleteBtn)
    let equalBtn = document.querySelector("#equals")
    console.log(equalBtn)
    let numbers = document.querySelectorAll(".number");
    console.log(numbers)
    let operators = document.querySelectorAll(".operation")
    console.log(operators)
    let previousScreen = document.querySelector(".prev")
    console.log(previousScreen)
    let currentScreen = document.querySelector(".curr")
    console.log(currentScreen)
    let decimalBtn = document.querySelector(".decimal")

    numbers.forEach(number => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operators.forEach(op => op.addEventListener("click", function (e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clearBtn.addEventListener("click", function () {
        previousValue = ""
        currentValue = ""
        previousScreen.textContent = currentValue
        currentScreen.textContent = currentValue
    })

    deleteBtn.addEventListener("click", function () {
        currentValue = "";
        currentScreen.textContent = currentValue

    })

    equalBtn.addEventListener("click", function () {
        if (currentValue != "" && previousValue != "") {
            calculate()


            previousScreen.textContent = "";
            currentScreen.textContent = previousValue;
        }
    })

    decimalBtn.addEventListener("click", function () {
        addDecimal()
    })

})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num
        //console.log(num)

    }


}

function handleOperator(op) {
    operator = op;
    //console.log(op)
    previousValue = currentValue;
    currentValue = ""

}


function calculate() {

    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue
    } else if (operator === "-") {
        previousValue -= currentValue
    } else if (operator === "×") {
        previousValue *= currentValue
    } else if (operator === "÷") {
        previousValue /= currentValue
        /* if (previousValue / 0) {
             console.log("invalid")
             return "invalid"
         }*/
    }
    previousValue = roundNum(previousValue);
    //console.log(previousValue)
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();



}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += "."
    }
}


