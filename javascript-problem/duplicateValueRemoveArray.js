var number =[51,654,21,4,61,16,61,61,61,56,65,56,65,98,12,25]
console.log(number);
var filter = [];
for(var i=0;i<number.length;i++){
    var element = number[i];
    var cheek = filter.indexOf(element);
    if (cheek == -1){
        filter.push(element);
      
    }
}
console.log(filter);