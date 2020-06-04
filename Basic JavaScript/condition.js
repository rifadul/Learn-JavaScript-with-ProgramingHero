price = 20;
if(price<15){
    console.log("I can buy this product")
    var a = 100;
    var b = 12;
    var total = a+b;
    console.log("Total result : "+total);
}
else{
    console.log("I can't affort this product..So I can't bye it")
}
// condition two

var mark = 15;
if(mark >= 80 && mark <=100)
{
    console.log("You got A+")
}
else if(mark >= 70 && mark <=79){
    console.log("You got A");
}
else if(mark >=60 && mark <= 69){
    console.log("Yo got A-")
}
else if(mark >= 40 && mark <60){
    console.log("Only pas")
}
else if(mark > 100){
    console.log("Great not define more than 100 number")
}
else{
    console.log("You Are Fail")
}