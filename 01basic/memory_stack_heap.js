/*
memory ->two types 
1. stack(premitive)->yha copy jata hai
2. Heap(non premetive)-> yaha reference jata hai aur yha pe original value pe kaam hota hai


 */

let myYoutubename= "pnishant213"

let anothername=myYoutubename

anothername="nishant"
console.log(anothername);
console.log(myYoutubename);

let userone={
    email: "pnishant213@gmail.com",
    upi:"helloworld"
}

let usertwo=userone

usertwo.email="nishant.2125cs1064";

console.log(userone)
console.log(usertwo)
