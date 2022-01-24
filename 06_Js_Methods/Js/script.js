
console.log("HELLO");

// function  display(){
//     console.log("Display Method");
// }
let display=()=>console.log("display Method");//No Paramters
display()


// function displayname(myName){
//     console.log(`My name:${myName}`);

// }
let displayname=myName=>console.log(`My Name :${myName}`);
displayname("NareshReddy")

// function addition(firstNum,secondNum){
//     let result=firstNum+secondNum;
//     console.log(`Result:${result}`);
// }

let addition=(firstNum,secondNum)=>{
    let result=firstNum+secondNum;
         console.log(`RESULT:${result}`);

}

addition(29,99)