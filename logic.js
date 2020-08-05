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

numFunction = () => {
    console.log("aye");
    if (isCalculated) {
        return false;
      }

    if (isOperatorChosen){
        secondNum += document.getElementsByClassName("num").value;
        document.getElementById("secondNumber").innerHTML = secondNum;
    }
    else {
        firstNum += document.getElementsByClassName("num").value;
        document.getElementById("firstNumber").innerHTML = firstNum;
    }
    //gotta pass this through the number buttons to test if it works  
};

operatorFunction = () => {
    console.log("aye");

    if (!firstNumber || isCalculated) {
        return false;
      }
    
      isOperatorChosen = true;
      operator = document.getElementsByClassName("operators").value;
      document.getElementById("operator").innerHTML = operator;

};

