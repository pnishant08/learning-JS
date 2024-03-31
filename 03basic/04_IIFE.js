//immediately invoke function Expressions

(function chai(){
    //names iife 
    console.log(`DB CONNECTED`)
})();

//fe agr 2 baar likhe to end krne ke liye line ko end karna hoga  uske liye semi colon lagana padega


//global scope ke pollution ko hatane ke liye ye use hota hai
( (name)=>{
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})('nishant')
// chai()

