var marks =[45,32,65,87,34,98,96,54,24,68,35,09,1,70,92];
var max = marks[0];
for(var i = 0;i<marks.length;i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Height marks is : ",max);

// find min
min=marks[0];
for(i=0;i<marks.length;i++){
    element = marks[i];
    if(element < min){
        min = element;
    }
}
console.log("Lower marks is : ",min);