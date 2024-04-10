//for each loop

const coding =["js","ruby","java","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// }  
// )

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


const myCoding=[
    {
        languageName:"Java",
        languageFileName : "java"
    },
    {
        languageName:"javascript",
        languageFileName : "js"
    },
    {
        languageName:"python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})