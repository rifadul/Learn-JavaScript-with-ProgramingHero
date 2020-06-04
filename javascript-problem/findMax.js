var a =5600;
var b =1050;
var c =8900;
var d = 6000;
var max = Math.max(a,b,c,d);
console.log(max);

if (a>b && a>c && a>d){
    console.log("a is big")
}
else if(b>a && b>c && b>d){
    console.log("b is big");
}
else{
    if(c>a && c>b && c>d){
        console.log("c is big");
    }
    else{
        console.log("d is big");
    }
    
}