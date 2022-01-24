// Global key words
// String boolean array number object null undefined;

//01_Method
var firstName="Nareshreddy"; //String
var lastName="Karra";
var mobileNumber=9490097717;//Number
var salary=10090.90;//Number
var isQualified=false;//Boolean
var address=["Janagapally","Karimnagar"];//Address

console.log("FirstName:"+firstName);//
console.log(`First Name:${firstName}`) //ES6
console.log(`LastName:${lastName}`);
console.log(`MobileNumber:${mobileNumber}`);
console.log(`Salary:${salary}`);
console.log(`IsQualified:${isQualified}`);
console.log(`Address:${address}`);

//
var firstName="Vamshireddy",lastName="Gaddam",salary=99000,mobileNumber=9491112942,isQualified=true,address=["Julapallay","Peddapalli"];
console.log(`\nFirstName:${firstName}`,`\nLastName:${lastName}`,`\nMobileNumber:${mobileNumber}`,`\nIsQualified:${isQualified}`,`\nAdderess:${address}`,`\nSalary:${salary}`);




// var student1=[{
//     id:01010,
//     name:"Nareshreddy karra",
//     age:23,
//     dept:"IT",
//     desg:"Angular Dev"
// }]
// console.log(student1);

var student=[{
    id:1,
    name:"raja",
    age:23,
    dept:"IT",
    desg:"Angular Dev"
}]

console.log(student);//


for(var i=0;i<student.length;i++){
    console.log(student[i]);
}

for(var stu of student){
    console.log(stu);
}

for(var stu1 of student){
    console.log(student[0]);
}