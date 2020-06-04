// function declaration
function add(num1, num2) {
    return num1 + num2;
}
const summation = add(15, 20);
console.log('Summation : ', summation);

// if we not provied perameter value properly// old style function declaration  

function sub(num1, num2) {
    if (num2 == undefined) {
        num2 = 3;
    }
    return num1 - num2;
}
const substraction = sub(22);
console.log('Substraction : ', substraction);

// if we not provied perameter value properly// update style function declaration  

function mul(num1, num2) {
    num2 = num2 || 1;
    return num1 * num2;
}
const multiply = mul(20);
console.log("Multiply : ", multiply);

// if we not provied perameter value properly// latest update ES6 style function declaration  

function div(num1, num2 = 1) {
    return num1 / num2;
}
const divition = div(30);
console.log("Divition : ", divition);

