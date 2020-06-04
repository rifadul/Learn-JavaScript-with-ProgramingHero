var student = {id:1886,name:"siam",phone:"01766516", program:"cse"};
console.log(student);

// value find
var studentProgram = student.program;
console.log(studentProgram);
var studentPhone = student["phone"];
console.log(studentPhone);

// update value
student.id=1875;
console.log(student.id)
student["name"] = "Tasin";
console.log(student.name);

// insert new object 
student.address = "tangail";
console.log(student);