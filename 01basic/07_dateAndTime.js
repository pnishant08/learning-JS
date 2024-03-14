 let myDate =new Date()
//  console.log(myDate)

//  console.log(myDate.toDateString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toLocaleString())

 console.log(typeof myDate)

 let myCreatedate = new Date (2024,0,23);
 console.log(myCreatedate.toDateString())//month 0 se start hota hai
 //aur bhi tareeke ka hota hai 

 //dd mm yy me 01 se start hota hai

 let myTimestamp = Date.now();
 console.log(myTimestamp)

 console.log(myCreatedate.getTime())

//math.floor(Dte.now()/1000)->easily compare ho jata hai
let newDate = new Date();
console.log(newDate.getMonth()+1)//aur bhi kai option hai jo dot lagane ke baad aa jate hai 
//jaise day , year,second,and so on

newDate.toLocaleDateString('default',{
    weekday:"long",
})

