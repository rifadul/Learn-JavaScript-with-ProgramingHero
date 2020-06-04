var num =25.46;
var result = Math.floor(num);
console.log(result);
var result2 = Math.ceil(num);
console.log(result2);
var result3 = Math.round(num);
console.log(result3);
for(var i = 0;i<6;i++) {
    var randomNumber = Math.random()*6;
    var finalResult = Math.round(randomNumber);
    if(finalResult > 0){
        console.log(finalResult);
    }
    
}
// find random number between 100 to 200
for(var i=0;i<60;i++){
    var resultQuiz = 20+Math.random()*300;
    console.log(resultQuiz);
}


