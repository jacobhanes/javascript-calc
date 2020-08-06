const numButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "x", "/", "="];

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

    let selected = document.getElementsByTagName("H1")
    while(wrap.firstChild) wrap.removeChild(wrap.firstChild); //not sure if this works//
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

    if (!firstNumber || isCalculated) {
        return false;
      }
    
      isOperatorChosen = true;
      operator = value;
      document.getElementById("operator").innerHTML = operator;

};

