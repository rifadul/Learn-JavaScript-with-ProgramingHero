
var word = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.";

console.log(word);

function reverceString(str){
    var reverceStr ="";
    for(var i=0; i<str.length;i++){
        var popLetter = str[i];
        reverceStr = popLetter+reverceStr; 
    }
    return reverceStr;
}

var reverceStr = reverceString(word);
console.log(reverceStr);


var revStr = reverceString("I am Siam Khushnobish.I live in Tangail");

console.log(revStr);

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split("");
//     console.log(splitString);
// }

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    console.log(joinArray);
    //Step 4. Return the reversed string
    // return joinArray; // "olleh"
}
reverseString("hello ");
