// console.log(2>1)  //-> same data type ko compare karao to t/f hi aata hai
// >=,<=,<,===,!=


//dikkat tab aati hai jab same variable na ho

// console.log("2">1);
// console.log("02">1); kabhi kabhi predictable ans nhi dete hai



// console.log(null>=0)//T
// console.log(null==0)//F
// console.log(null>0)//F

//the reason is that equity check == and comparisons ><>=<= work differently
//commparisons convert null to number and treating it as 0;


//undefined ko kisi se kara lo to false hi aayega

///strict check === data type bhi check karega
console.log("2"===2);


