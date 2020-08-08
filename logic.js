let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;
let isOperatorChosen = false;
let isCalculated = false;

initializeCalc = () => {
    
    firstNum = 0;
    secondNum = 0;
    operator = "";
    result = 0;
    isOperatorChosen = false;
    isCalculated = false;

    document.getElementById("firstNumber").innerHTML = 0;
    document.getElementById("secondNumber").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
    document.getElementById("operator").innerHTML = "";
}

numFunction = (value) => {
    
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
     
};

operatorFunction = (value) => {
    
    if (!firstNum || isCalculated) {
        return false;
      }
    
      isOperatorChosen = true;
      operator = value;
      document.getElementById("operator").innerHTML = operator;

};

equalFunction = () => {
    
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
    else if (operator === "^") {
        result = Math.pow(firstNum, secondNum);
    }
    else if (operator === "%"){
        result = firstNum * secondNum / 100;
    }

    document.getElementById("result").innerHTML = result;
};

clearFunction = () => {
    initializeCalc();
};

initializeCalc();

