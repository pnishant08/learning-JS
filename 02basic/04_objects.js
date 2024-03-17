//const tinderuser=new Object()
const tinderuser={}//ye singleton object hai upper wala non singleton

tinderuser.id="123abc"
tinderuser.name="ankit"
tinderuser.isLoggedIn=false

//console.log(tinderuser)


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"ankit",
            lastname:"singh"
        }
    }
}
console.log(regularUser.fullname?.userFullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2};//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 
//ye output ko shi krne ke liye hum assign karte hai

//const obj3=Object.assign({},obj1,obj2); //bracket target hai aur baki sab source hai
//upper wale ko kam use krenge

const obj3={...obj1,...obj2}

//console.log(obj3)

//database se jab value aayega
const user=[{
    id:1,
    email:"some@gmail.com"
},
{
    id:2,
    email:"hello@gmail.com"
}
]
console.log(user[1].id)

console.log(tinderuser);

console.log(Object.keys(tinderuser));//very important
console.log(Object.values(tinderuser))

console.log(Object.entries(tinderuser))


console.log(tinderuser.hasOwnProperty('isLoggedIn'))