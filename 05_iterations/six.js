// const coding =["js","ruby","java","cpp"]


// const values=coding.forEach((item)=>{
//     // console.log(item)
//     return item 
// })

// console.log(values)//for each does not return any value



// const myNums=[1,2,3,4,5,6,7,8,9,10]


// const newNums=myNums.filter((num)=>num>4)

// console.log(newNums)



const myNums=[1,2,3,4,5,6,7,8,9,10]


// const newNums=myNums.filter((num)=>{
//     return num>4//jab bhi scope aa jaye to return karna jaruri hai
// })

//agr isko for each se karu

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)