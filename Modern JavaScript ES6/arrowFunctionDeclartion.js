// old style function declaration

function doubleIt(num1, num2) {
    const result = num1 * 2;
    return result;
}

const resultMul = doubleIt(5);
console.log(resultMul);

// variable function declaration
const addValue = function (num1, num2) {
    const add = num1 + num2;
    return add;
}
const sum = addValue(45, 25);
console.log(sum);

// Es6 function declearation // arrow function declearation

const addIt = num => num + 5; // single perameter function
const result1 = addIt(50);
console.log(result1);

const addIt2 = (num1, num2 = 10) => num1 + num2; //dubble/ N-th perameter function
const result2 = addIt2(50, 60);
console.log(result2);

const defultValue = () => 10000000; // empty perameter
const defult = defultValue();
console.log(defult);

const doMath = (num1, num2, num3) => {      // n-th line function 
    const add = num1 + num2;
    const sub = add - num3;
    const mul = add * sub;
    return mul;
}
const result3 = doMath(8, 5, 3);
console.log(result3);


// rest with function and other arguments 
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan 
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ] 
    console.log(c[0]); //Lionel 
    console.log(c.length); //3 
    console.log(c.indexOf('Barcelona')); //2
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona'); 
