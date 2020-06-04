var friendAge = [15,18,20,23,"Siam",32,54,65];
console.log(friendAge);
console.log(friendAge[1]);
var munia = friendAge[2];
console.log(munia);
var know = friendAge.indexOf("Siam");
console.log(know);
friendAge[5] =100;
 console.log(friendAge);

 if(know==-1){
     console.log("Not found the index");
 }
 else{
     console.log("The value is " +friendAge[know] + " index is " +know);
 }
 console.log(friendAge.length);
 friendAge.push("kabir");
 console.log(friendAge);
 friendAge.pop();
 console.log(friendAge);
 friendAge.pop();
 console.log(friendAge);
 friendAge.push("kabir",65,"protick","munia");
 console.log(friendAge);
 console.log(typeof friendAge);
 friendAge.unshift(734,59,874);
 console.log(friendAge);
 friendAge.shift();
 console.log(friendAge);
 friendAge.shift();
 console.log(friendAge);
 console.log(friendAge.shift());
 console.log(friendAge);
 console.log(friendAge.length);
friendAge.splice(3,2);
console.log(friendAge)
console.log(friendAge.length);