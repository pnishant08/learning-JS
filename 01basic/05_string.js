const name ="hitesh"
const repoCount =50

console.log(name+repoCount+"value")//ye kafi outdated ho gya hai isiliye iske jagah 
//backticks use krte hai

//string interpolation use for it we make place holder 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//it is better to readable

// we can use method in interpolation

const gameName= new String('nishant')//ye object ki tarah kaam karega jo key pairs ke sath kaam karega


/*anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Nishant"
*/


console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

//charAt('6'),indexOf('t'),

const Name=new String('pandey');
const newString = Name.substring(0,4);
console.log(newString);

const anstring=Name.slice(-5,4)
console.log(anstring)

//trim

const newStringOne="    Nishant    "
console.log(newStringOne)
console.log(newStringOne.trim())//remove extra space

//replace 

const url="nishant.2125cs1064%20kiet.edu"
console.log(url.replace('%20','@'));

console.log(url.includes('nishant'))

console.log(url.split('%'))

