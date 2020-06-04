var words = "What is    Lorem Ipsum  Lorem          Ipsum is simply dummy text     of the   printing.";
var count=0;
console.log(words.length);
 for(var i=0; i<words.length;i++){
     var latter = words[i];
     console.log(latter);
     if(latter== " " && words[i-1] != " "){
        count++;
     }
 }
 count++;
 console.log(count);