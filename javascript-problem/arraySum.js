var marks = [45,32,65,87,34,98,96,54,24,68,35,09,1,70,100,82];
var sum = 0;
for(var i=0;i<marks.length;i++){
    sum += marks[i];
}
console.log("Total Number Is : ",sum);

// using function
function getArraySum(number){
    var sum = 0;
    for(var i=0;i<number.length;i++){
    sum += number[i];
    }
    return sum;
}
var marks = [45,32,65,87,34,98,96,54,24,68,17];
var total = getArraySum(marks);
console.log("Total Number Is : ",total);
var totar1 = getArraySum([15,89,54,63,48,61,43,67,20,40]);
console.log("Total Number Is : ",totar1);


var friends = ["Alu ", "Bulu ", "culu ", "dulu ", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames+name;
}
console.log(allNames)
