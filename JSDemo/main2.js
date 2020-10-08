"use strict"

// OBJECT OPERATORS
const obj = {
    id: '1',
    name: 'Steven',
    lastName: 'D\'Hondt',
    mail: 'steven@gmail.com',
    nr: '0479318743'
}

console.log(obj.name)
console.log(obj["name"])

console.log("nr" in obj)

// FACTORY FUNCTION
let aName, lastName
function createPerson(aName, lastName){
    console.log(aName+" was created")
    return{
        aName,
        lastName,
        wakeUp(){
            console.log(aName+" was woken up")
        }
    }
}
var p0 = createPerson("Trish", "Regan")
console.log(p0)
p0.wakeUp()

// CLASS CONSTRUCTOR
let id, name, nr
class PersonClass{
    constructor(id, name, nr){
        this.id = id
        this.name = name
        this.nr = nr

        console.log(name+" was created")
    }
}

var p1 = new PersonClass(2, "Ann", "036660656");
console.log(p1)

// (OBJECT) CONSTRUCTOR FUNCTION
let first, last, age, eye
function PersonObject(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

    console.log(first+" was created")
}

var p2 = new PersonObject("John", "Doe", 50, "blue")
console.log(p2)

console.log(typeof PersonClass)
console.log(typeof PersonObject)

// Instance Of
const d = new Date()
console.log(d)
console.log(d instanceof Date)

// Delete
const someObject = {x:1,y:2,z:3}
delete someObject.x
console.log(someObject)
console.log("x" in someObject)
console.log(someObject.x)

let someArray = [1,2,3,4,5]

delete someArray[1]
console.log(someArray)
console.log(someArray[1] in someArray)
console.log(someArray[1])

//ADD TO FRONT AND BACK OF ARRAY
someArray.unshift(0) // shift to remove
someArray.push(6) // pop to remove

console.log(someArray)

someArray = ["start",...someArray] // Reassigning so can't be const
someArray = [...someArray, "end"]

console.log(someArray)

// IF ELSE
let welcome
if(welcome){
    console.log(welcome)
}else{
    console.log("no welcome defined")
}

// CONDITIONAL
console.log(welcome=welcome?welcome:"no welcome defined")

// JUMP STATEMENTS
let i
for(i = 0; i<10; i++){
    if(i>2)break
    console.log(i)
}
console.log(i) // prints 3

for(i = 0; i<10; i++){
    if(i>2)continue
    console.log(i)
}
console.log(i) // prints 10

// RETURN
function double(x){
    return x*2
}
console.log(double(5))

// FUNCTION WITH DEFAULT ARGS
function triangleArea(a=10,b=10){ // Default values
    return (a*b)/2
}

console.log(triangleArea()) // Uses defaults (10*10)/2
console.log(triangleArea(2,5))

// ANONYMOUS FUNCTION
const o = {
    name:"Anonymous",
    invoke: function(){
        return "I got invoked..."
    }
}
console.log(o.invoke())

// CREATE PRIVATE VARIABLE
function privateString(){
    var privateString = "some private string"
    return function(){
        return privateString
    }
}

var privateString = privateString()
console.log(privateString) // Will not show variable
console.log(privateString())

// PRIVATE OBJECT PROPERTY
var hero = {
    _name: "John Doe",
    getSecretIdentity: function(){
        return this._name;
    }
}

var tryToStealIdentity = hero.getSecretIdentity // Will not work
var stealIdentity = hero.getSecretIdentity.bind(hero)
// console.log(tryToStealIdentity())
console.log(stealIdentity())
console.log(hero.getSecretIdentity())

// ARROW FUNCTIONS
const f1 = () => "Hello world"
const f2 = (arg) => `Argument was ${arg}`
const f3 = (a,b) => a*b

console.log(f1())
console.log(f2(5))
console.log(f3(5,5))

// DESTRUCTURING ARGUMENTS
const bookRack = {
    b1: "Animal Farm",
    b2: "1984",
    b3: "Keep the Aspidistra Flying"
}

function getBooks({b1,b2,b3}){
    return `${b1} ${b2} ${b3}`
}

console.log(getBooks(bookRack))

const bookArray = ["Animal Farm","1984","Keep the Aspidistra Flying"]

function getBooksFromArray([b1,b2,b3]){
    return `${b1} ${b2} ${b3}`
}

console.log(getBooksFromArray(bookArray))

// call() METHOD
function greet(){
    return `Welcome ${this.myName}, have a nice day.`
}

const me = {myName:"Steven"}

// console.log(greet())
console.log(greet.call(me))

// IIFE (immediately invoke function expression)
const f = (function(){
    return "Immediately invoked anonymous function"
})()

console.log(f)

const g = (function(){
    let i = 0
    return function(){
        return `count is ${i++}`
    }
})()

console.log(g())
console.log(g())
console.log(g())