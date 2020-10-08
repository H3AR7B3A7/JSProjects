'use strict'
// SIMPLE DECLARATONS
console.log("Hello world")
const TEMP = 36, HUMIDITY = 100
let name, lastName, age = 24
name = "Steven"
console.log(age)
console.log(name)

const inf = Infinity
const ninf = -Infinity
const nan = NaN

age = "test"+" of vars"
console.log(age)

let isActive=true
let nightModeEnabled=false

const blue = Symbol()
const white = Symbol()

console.log(blue === white)

age = null
name = undefined

console.log(age)
console.log(name)

// OBJECTS
const obj = {}

obj.age = 21
console.log(obj.age)
obj.age;
console.log(obj.age)

const obj2 = {
    name: "Steven",
    age: 31,
    more: "Stuff"
}

console.log(obj2.name+","+obj2.age)
delete obj2.age;
console.log(obj2.name+","+obj2.age)

// ARRAYS
const a1 = [1,2,3,4,5]
const a2 = [1,2,null,4,"five"]
const a3 = ['test','hello','world']

const a4 = [[1,2,3],[4,5,6]]

console.log(a2[4])

// DATES
const now = new Date()
console.log(now);

// MAP
const roles = new Map()
roles.set('t1', 'User1')
roles.set('t2', 'User2')

console.log(roles)

// SET
const books = new Set()
books.add("Animal Farm")
books.add("1984")

console.log(books)

// ESCAPING
lastName = "D'Hondt"
lastName = 'D\'Hondt'
console.log(lastName)

console.log("\\u03A9")
console.log("\u03A9")

// FUNCTIONAL STRING
let str = `My name is ${obj2.name} ${lastName}`
console.log(str)

// TYPE INFERANCE TEST
let test = 5 * '5'
let test2 = 5 + '5'
console.log(test)
console.log(test2)

// IF
if(isActive)
console.log(test)
else
console.log(test2)

// SWITCH
switch (test){
    case 5:
        console.log("weird")
        break
    case 25:
        console.log("should be it")
        break
    case 55: 
        console.log("shouldn't be")
        break
    default:
        console.log("non existent")
    break
}

// WHILE
let i = 0
while(i < 4){
    console.log(i)
    i++
}

do{
    console.log(i)
    i--
}while(i > 0)

// FOR LOOP
for (let a = 0; a < 4; a++){
    console.log("test"+a)
}

for (let b = 0; b < 3; b++){
    for (let c = 0; c < 3; c++){
        console.log(b+","+c)
    }
}

// FOR ... IN
for(let o in obj2){
    console.log(o)
    console.log(obj2[o])
}

// FOR ... OF
for(let book of books){
    console.log(book)
}

for(let role of roles){
    console.log(role)
}

// ASSIGNMENT
let x,y

y = x = 5*6

console.log("x="+x+"y="+y)

// COMPARE
let r,t

r = 10
t = "10"

console.log(r == t) // Abstract
console.log(r === t) // Strict

// TYPE OF
console.log(typeof r) // number
console.log(typeof t) // string
console.log(typeof null) // -.-" object
console.log(typeof function(){}) // function
console.log(typeof typeof 1) // string- order of operations

// DESTRUCTURE
const obj3 = {u:1,v:2,w:3,r:4,e:5}
const {u,v,w/*,...last*/} = obj3 // Takes first value's when not all are destructured

console.log(u)
console.log(v)
console.log(w)
// console.log(last)

const array = [1,2,3,4,5,6,7]
const [j,k,l,...rest] = array

console.log(j)
console.log(k)
console.log(l)
console.log(rest)

// SOME MORE ARRAY MUTATIONS
// ARRAY CONCAT
console.log(array.concat(8,9))
// ARRAY SLICING / SPLICING
console.log(array.slice(1,4))
console.log(array.splice(1,6,5,6,7))
// ARRAY COPYWITHIN / FILL
console.log(array.copyWithin(1,2,3))
console.log(array.fill("d",1,2))
// ARRAY MAPPING
console.log(array.map(x=>x+2))