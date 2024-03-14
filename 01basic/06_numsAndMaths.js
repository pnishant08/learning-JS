const score=400;
//console.log(score);

const balance = new Number(100);
//console.log(balance)
//it also have prototype
/*constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
100*/

//console.log(balance.toString())

//console.log(balance.toFixed(2))//used for decimal

const othernumber =23.8966

//console.log(othernumber.toPrecision(3))//isme aur cheeze e se related hai

const hunderd=100000
//console.log(hunderd.toLocaleString('en-IN'));

///+++++++++++++++++++++++++++++++++++++++++++

///new topic is math

console.log(Math)

//it also have property
/**E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
Symbol(Symbol.toStringTag)
: 
"Math" */

//abs->absolute value hota hai, round 4.3->4 like regular days

//ceil se agr ajra se bhi jyada hua to upper value leta hai aur floor bhi hota hai

console.log(Math.min(1,3,2,4,5));

//random() ->iska use bhi game bnane ke liye karte hai

//kaha se kha tak value chahiye depend karta kisse aap isko multiply karte hai
 
console.log(Math.random())
console.log(Math.random()*10+1)

console.log(Math.floor(Math.random()*10)+1)
const min =10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)