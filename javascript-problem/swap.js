// fist way to swap
console.log("fist way to slv swap")

var a = 10;
var b = 65;
console.log("before swap a = ",a," b = ",b);
// use third variable
var temp = a; // temp = 10;
a= b;// a = 65
b= temp; // b = 10;
console.log("after swap a = ",a," b = ",b);

// second way to swap
console.log("second way to slv swap")
var x = 30;
var y = 70;
console.log("before swap x = ",x," y = ",y);
x = x+y; // x = 30+70 = 100
y = x-y; // y = 100-70 = 30
x = x-y; // x = 100-30 = 70
console.log("after swap x = ",x," y = ",y);

// third way to swap
console.log("Third way to slv swap")
var p =45;
var q = 87;
console.log("before swap p = ",p," q= ",q);
[p,q] = [q,p]; // [p,q] = [45,87]
console.log("after swap p = ",p," q= ",q);


