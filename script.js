// let n1 = 1;
// let n2 = 3;
// let operator = '+';


const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
	
};

const multiply = function(n1, n2) {
   return n1 * n2;
};

const divide = function(n1, n2) {
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

// console.log(add(5,5));
console.log(operate(5,5,'l'));