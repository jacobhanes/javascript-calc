const numButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "x", "/", "="];

let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;
let isOperatorChosen = false;
let isCalculated = false;

initializeCalc = () => {
    console.log("working")
    firstNum = 0;
    secondNum = 0;
    operator = "";
    result = 0;
    isOperatorChosen = false;
    isCalculated = false;

    let selected = document.getElementsByTagName("H1")
    while (selected.firstChild) {
        selected.removeChild(selected.firstChild);
    };
}

numFunction = (value) => {
    console.log(value);
    if (isCalculated) {
        return false;
      }

    if (isOperatorChosen){
        secondNum += value;
        document.getElementById("secondNumber").innerHTML = secondNum;
    }
    else {
        firstNum += value;
        document.getElementById("firstNumber").innerHTML = firstNum;
    }
    //gotta pass this through the number buttons to test if it works  
};

operatorFunction = (value) => {
    console.log(value);

    if (!firstNum || isCalculated) {
        return false;
      }
    
      isOperatorChosen = true;
      operator = value;
      document.getElementById("operator").innerHTML = operator;

};

equalFunction = () => {
    console.log("yay")
    if (isCalculated) {
        return false;
    }

    isCalculated = true;
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);

    if (operator === "+") {
        result = firstNum + secondNum;
    }
    else if (operator === "-") {
        result = firstNum - secondNum;
    }
    else if (operator === "x") {
        result = firstNum * secondNum;
    }
    else if (operator === "/") {
        result = firstNum / secondNum;
    }

    document.getElementById("result").innerHTML = result;
};

clearFunction = () => {
    initializeCalc();
};

initializeCalc();

