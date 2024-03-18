
function sayMyName(){
    console.log("N")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("t")
    
}

//sayMyName()//iska matlab execute ho rha hai

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
//addTwoNumber("3",2)//yha pe string ban jata hai
//agr string na lagao to number hota hai

// addTwoNumber("a",2)//a2
// addTwoNumber(3,null)

// jo pass hoga vo argument hai
//number 1 ye parameter hai


//const result =addTwoNumber(3,4)
//console.log("result :",result)//yha result me undefined


function addTwoNumber(number1,number2){
    //  let result =number1+number2;
    //  return result;
    return number1+number2;
}

const result =addTwoNumber(3,4)
//console.log("result :",result)

function loginUserMessage(username){//agr user kuch na pass kare to use username="sam"koi value khud do

    // if(username===undefined)
    if(!username){
         console.log("please enter the username")
         return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nishant"))
//console.log(loginUserMessage())



function calculateCartPrice(val1,val2,...num1){//rest operator and spread operator
    return num1//ek array me daal rha hai aur function me multiple value kaise pass ho rhi
}
//console.log(calculateCartPrice(200,300,400,233,433,111));

//jab val1 daal rha aur val2 daal rha hu to ye apne aap do value usme le rha aur baki sare nums me ja rha hai

// const user={
//     username:"nishant",
//     price:2000
// }

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user); 

handleObject({
    username:"amit",
    price:199
})

const myNewArray=[200,300,400,500]

function returnSecondValue(getarray){
    return getarray[1];
}
console.log(returnSecondValue(myNewArray))

