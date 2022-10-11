const display = document.querySelector('#display');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "*") return multiply(a,b);
    if (operator === "/") return divide(a,b);
}



const numSelect = (e) => {
    //displays numbers selected
    display.textContent += e.target.value;
}

const operatorSelect = (e) => {
    //Displays operant selected
    display.textContent += (" " + e.target.value + " ");
}

const equals = () => {
    //turns the display into an array split by " "
    let operationArray = display.textContent.split(" ");
  
    let sum = 0;

    const operateInArray = (operator) => {
        for (let i = 0; i < operationArray.length; i++) {
            if (operationArray[i] === operator) {
                sum = operate(operator,parseFloat(operationArray[i-1]),parseFloat(operationArray[i+1])).toFixed(3); 
                sum.toString();
                //replaces used values with sum of operation
                operationArray.splice(i-1,3,sum);
                
            }
        }
    }
    
    //Checks if array has more than one value and operates on them
    while (operationArray.length > 1) {
        operateInArray('/');
        operateInArray('*');
        operateInArray('+');
        operateInArray('-');
    };

    //Remove unused decimals
    if (sum.endsWith(".000")) {
        sum = sum.slice(0, - 4);
    } else if (sum.endsWith("000")) {
        sum = sum.slice(0, - 3);
    } else if (sum.endsWith("00")) {
        sum = sum.slice(0, - 2);
    } else if (sum.endsWith("0")) {
        sum = sum.slice(0, - 1);
    }

    //Ceep and display the sum
    operationArray = [sum];
    display.textContent = sum;

}
//Clears the array and display
const clear = () => {
    operationArray = [];
    display.textContent = "";
}

const comma = (e) => {
    display.textContent += e.target.value;
}

const delete1 = () => {
    let text = display.textContent.slice(0,-1);
    display.textContent = text;
}

document.querySelector("#btn1").onclick = numSelect;
document.querySelector("#btn2").onclick = numSelect;
document.querySelector("#btn3").onclick = numSelect;
document.querySelector("#btn4").onclick = numSelect;
document.querySelector("#btn5").onclick = numSelect;
document.querySelector("#btn6").onclick = numSelect;
document.querySelector("#btn7").onclick = numSelect;
document.querySelector("#btn8").onclick = numSelect;
document.querySelector("#btn9").onclick = numSelect;
document.querySelector("#btn0").onclick = numSelect;

document.querySelector("#add").onclick = operatorSelect;
document.querySelector("#subtract").onclick = operatorSelect;
document.querySelector("#multiply").onclick = operatorSelect;
document.querySelector("#divide").onclick = operatorSelect;
document.querySelector("#equals").onclick = equals;
document.querySelector("#clear").onclick = clear;
document.querySelector("#comma").onclick = comma;
document.querySelector("#delete1").onclick = delete1;