 

 const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls , cryptography , network 
    setTimeout(function(){
        console.log("async taask is complete")
        resolve()
    },1000)
 })

promiseOne.then(function(){
    console.log("promise consumed")
})//resolve k sath connection `


new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("async task 2") 
       resolve()
    },1000);
}).then(function(){

    console.log("async 2 resolveed")
})

const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve ({username:"Nishant",email:"hello@example"})
    },1000)
})

promiseThree.then(function(user){
   console.log(user);
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
           resolve({username:"Nishant",password:"hello 123"})
        }
        else{
            reject("ERROR : Something went Wrong")
        }
    },1000)
})

// const username =promisefour.then((user)=>{
//     console.log(user);
//     return user.username
// })  ais enahi karna hai galatt method hai ye



promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("the promise os either resolve or rejected"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
           resolve({username:"javascript",password:"123"})
        }
        else{
            reject("ERROR : JS went Wrong")
        }
    },1000)
});

async function consumePromiseFive(){
  try {
    const response= await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive();



// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//       console.log("E:",error);
//    }
// }

// getAllUsers()


fetch('https://api.github.com/users/pnishant08')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))