// let n1 = 1;
// let n2 = 3;
// let operator = '+';

const add = function (n1, n2) {
    return n1 + n2;
};

const subtract = function (n1, n2) {
    return n1 - n2;
};

const multiply = function (n1, n2) {
    return n1 * n2;
};

const divide = function (n1, n2) {
    return n1 / n2;
};

const operate = (n1, n2, operator) => {
    switch (operator) {
        case "+":
            return add(n1, n2);
            break;
        case "-":
            return subtract(n1, n2);
            break;
        case "*":
            return multiply(n1, n2);
            break;
        case "/":
            return divide(n1, n2);
            break;
        default:
            return "wrong symbol";
            break;
    }
};

let container = document.querySelector(".container");
let display = document.querySelector('.display')
let result = "";
container.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    const equal = event.target.innerText === '=';
    if (!isButton) {
        return;
    } else if (!equal){
        result = result + event.target.innerText;
        display.textContent = result;
        console.log(result);
    } else {
        let splited = splitNumber(result);
        n1 = Number(splited[0]);
        n2 = Number(splited[1]);
        resultToShow = operate(n1,n2,'+');
        display.textContent = '';
        display.textContent = resultToShow;
    }
});

const splitNumber = (str) => {
    let regex = ['+', '-', '/', '*'];
    regex.forEach(reg => {
        let store = str.split(reg);
        console.log(store);
    });
    return store;
};

// console.log(add(5,5));
// console.log(operate(5,5,'+'));
