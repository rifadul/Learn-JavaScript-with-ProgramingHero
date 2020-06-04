// Rest perameter => array create kore value gula rekhe dei

const ValueCalculate = (num1, num2, num3, ...num4) => {  //...num4 is a rest perameter
    const sum = num1 + num2;
    const sub = sum - num3;
    count = 0;
    add = 0;
    for (let i = 0; i < num4.length; i++) {
        count++;
        add = add + num4[i];
    }
    console.log(sum);
    console.log(sub);
    console.log(count);
    console.log(add);
}

ValueCalculate(3, 5, 6, 8, 20, 34, 40, 45, 65, 70, 75, 80);

// Spread operator => array theke value ber kore
const fndNmameTang = ['Munia', 'Foysal', 'Mahib', 'Sajjad', 'Siam'];
const fndNmameUv = ['Amzad', 'Shimanto', 'Ahsan', 'Sid'];
const fndNmamefb = ['Protick', 'Shorif', 'Joy', 'Rathat'];

// old style to add nth array
const allFnds = fndNmameTang.concat(fndNmameUv).concat([560]).concat(fndNmamefb);
console.log(allFnds);

// es6 style
const allFnd = [...fndNmameTang, 600, ...fndNmameUv, ...fndNmamefb];
console.log(allFnd);

const someValue = [10, 12, 34, 45, 123, 65, 57, 23, 456, 754, 24];
const someValueCopy = [...someValue, 4500];
someValue.push(500);
someValue.push(2000);
someValue[3] = 50;
someValue[4] = 1550;
someValueCopy.push(100);
someValueCopy.push(1200);
console.log(someValue);
console.log(someValueCopy);
const maxValue = Math.max(...someValueCopy);
console.log(maxValue);
