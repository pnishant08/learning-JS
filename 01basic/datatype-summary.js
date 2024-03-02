/*primitive 
7 types : string , number , boolean ,Null,undefined,symbol,bigInt
*/

/*
non premetive (reference )

array,objects,fuctions,

*/ 

// js me kabhi language ko nhi define karte hai

// find out js kya hai statistically defined or dynamically defined

const score=123
const scorelen=123.5

const isLoggedIn = false

const outsideTemp= null

let userEmail ;

const id=Symbol('123')

const anotherId=Symbol('123')

console.log(id==anotherId)//it show false 

//array ko aise declare karte hai
const heros=["saktiman","naagraj","doga"];

//for object 
let myObj={
    name :"nishant",
    age : 23,

}

//for declareing function like variable
const myFunction =function(){
    console.log("Hello world");
}

console.log(typeof myFunction)//it show function but yha object function hota hai

// symbol ka symbol aata hai
