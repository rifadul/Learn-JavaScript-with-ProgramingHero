function summation(){
    var a= 10;
    var b= 5;
    var total = a+b;
    console.log("sum is : "+total);
    return total;
}

function subtraction(){
    var a = 350;
    var b = 20;
    var total = a-b;
    console.log("sub is : "+total);
    return total;
}
function multipication(a,b){
    var total = a*b;
    console.log("mul is : "+total);
    return total;
}

function divition(a,b){
    var total = a/b;
    console.log("div is : "+total);
    return total;
}
var sumresult=summation();
var subResult = subtraction();
var a= 65;
var b = 5;
var mulResult=multipication(a,b);
var divresult=divition(a,b);

var addBy=sumresult+mulResult;
var subBy=subResult-divresult;
console.log("Add By : "+addBy+" Sub By : "+subBy);
