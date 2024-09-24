/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addtwonumbers ( a , b){
//     return a + b
// }
// console.log (addtwonumbers(5 ,6))

// Arrow Function With Parameters

const addtwonumbers = (a ,b) => {
    return a + b 
}
let sum = addtwonumbers(32,54)
console.log(sum)


// Single Line Arrow Function With Parameters

// const addtwonumers2 = (a ,b) => a + b; - also correct way

const addtwonumers = (a ,b) => a + b
let sum2 = addtwonumbers(45,23)
console.log(sum2)


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello, there!!')

const sayHello = () => console.log('hello')
sayHello()

// Returning Multiple Lines

const returnMultipleLine = () => (
    `
    This is a multiline arrow function
    `
)

console.log(returnMultipleLine())

