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

    if (isCalculated) {
        return false;
      }

    if (isOperatorChosen){
        
    }  
}