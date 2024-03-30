//this ans arrow function

const user={
    username:"Nishant",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this)
    }
}
//  user.welcomeMessage();
//  user.username="Amit"
//  user.welcomeMessage();
//console.log(this)//pehle hum koi value nhi dete to aise save hota hai


//this bs object ke andr use hota hai

// function chai(){
//     let username ="Ankit"
//     console.log(this.username);
// }
// chai()


// const chai=()=>{
//     let username="nishant"
//     console.log(this)
// }


//chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>  num1+num2

//const addTwo=(num1,num2)=>( num1+ num2)

//similarly object ko return krne ke liye parenthesis use karte hai

const addTwo=(num1,num2)=>({username:"Nishant"})

console.log(addTwo(3,4))


// its also used in loops
