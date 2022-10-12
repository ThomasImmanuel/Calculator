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
     if (b === 0) {
        display.textContent = 'Calc you later!'
        tempNum = '';
        a = '';
        b = '';
        sum = '';
        operant = '';
        return;
     }
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "*") return multiply(a,b);
    if (operator === "/") return divide(a,b);
}


let tempNum = '';
let a = '';
let b = '';
let operant = '';
let sum = '';

const numSelect = (e) => {
    if (display.textContent == 'Calc you later!') clear();
    tempNum += e.target.value;
    //displays numbers selected
    display.textContent = tempNum;
}

const operatorSelect = (e) => {
    if (a == '') {
        a = tempNum;
    } else b = tempNum;

    if (a != '' && b != '') {
        sum = operate(operant,parseFloat(a),parseFloat(b));
        if (typeof sum !== 'number') return;
        sum = sum.toFixed(3);
        removeDec();
        display.textContent = sum;
        a = sum.toString();
        b = '';
    }
    operant = e.target.value;
    tempNum = '';
}

const removeDec = () => {
    if (sum.endsWith(".000")) {
        sum = sum.slice(0, - 4);
    } else if (sum.endsWith("000")) {
        sum = sum.slice(0, - 3);
    } else if (sum.endsWith("00")) {
        sum = sum.slice(0, - 2);
    } else if (sum.endsWith("0")) {
        sum = sum.slice(0, - 1);
    }
}

const equals = () => {
    if (a == '') {
        a = tempNum;
    } else b = tempNum;

    sum = operate(operant,parseFloat(a),parseFloat(b));
    if (typeof sum !== 'number') return;
    
    sum = sum.toFixed(3);
    removeDec();
    
    display.textContent = sum;
    tempNum = sum;
    a = '';
    b = '';

    //function for an array of numbers and operators
    // //turns the display into an array split by " "
    // // let operationArray = display.textContent.split(" ");
    // operationArray.push(num);
    // let sum = 0;

    // const operateInArray = (operator) => {
    //     for (let i = 0; i < operationArray.length; i++) {
    //         if (operationArray[i] === operator) {
    //             sum = operate(operator,parseFloat(operationArray[i-1]),parseFloat(operationArray[i+1])).toFixed(3); 
    //             sum.toString();
    //             //replaces used values with sum of operation
    //             operationArray.splice(i-1,3,sum);
                
    //         }
    //     }
    // }
    
    // //Checks if array has more than one value and operates on them
    // while (operationArray.length > 1) {
    //     operateInArray('/');
    //     operateInArray('*');
    //     operateInArray('+');
    //     operateInArray('-');
    // };

    // //Remove unused decimals
    // if (sum.endsWith(".000")) {
    //     sum = sum.slice(0, - 4);
    // } else if (sum.endsWith("000")) {
    //     sum = sum.slice(0, - 3);
    // } else if (sum.endsWith("00")) {
    //     sum = sum.slice(0, - 2);
    // } else if (sum.endsWith("0")) {
    //     sum = sum.slice(0, - 1);
    // }

    // //Ceep and display the sum
    // operationArray = [sum];
    // display.textContent = sum;

}


//Clears the array and display
const clear = () => {
    tempNum = '';
    a = '';
    b = '';
    display.textContent = tempNum;
}

const comma = (e) => {
    if (display.textContent.includes('.')) return;
    if (display.textContent == '') {
        display.textContent += ('0' + e.target.value);
        tempNum += ('0' + e.target.value);
    } else {
        display.textContent += e.target.value;
        tempNum += e.target.value;
    }
    
}

const delete1 = () => {
    let text = display.textContent.slice(0,-1);
    display.textContent = text;
    tempNum = text;
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