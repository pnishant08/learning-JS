//singleton 

//object literals

// Object.createe //ye constructor kka tareeke hai iske andr singleton banta hai
 
//curly bracket hi object hai

const mySym=Symbol("key1")


const jsUser={
    name:"hitesh",
    "full name":"Nishant Pandey",
    [mySym]:"mykey1",
    age : 18,
    location: "jaipur",
    email : "nishant.2125cs1064@kiet.edu",
    isLoggedIn: false,
    lastLoginDays : ["Monday","saturday"]

} 
// console.log(jsUser.email)//ye utna sahi tareeka nahi hai
// console.log(jsUser["email"])
// console.log(jsUser["full name"])//agr dot lagayenge to apne aap square bracket laga rhe hai
// console.log(jsUser[mySym])//always use square bracket in object if we dont use it then type uska string hai bracket lagane le baad symbol ho jata hai
 

jsUser.email="pnishant0824@gmail.com"//overright value
//Object.freeze(jsUser)
jsUser.email=("ankitsingh5002@gmail.com")
//console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello js user")
}
console.log(jsUser.greeting)//function execute nhi hua uska reference aya hai
console.log(jsUser.greeting())


jsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsUser.greetingtwo())//undefined aata hai apne aap