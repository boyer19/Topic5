console.log('Hello World!')

// Three ways to create variables
let color = 'blue'
var size = 'medium' //not recommended
const language = 'JavaScript'   // cannot change this value

// Number type
    let quantity = 5
    let distance = 4.5
// String
    let text = 'Hello World'
    let message = "Hi Programmers"
console.log('There are ' + quantity + ' programmers' + ' at ' + distance  + ' miles away!' )  // Terminal, New Terminal, node hello.js to see example

let todayTemp = 75

console.log("Today's temperature is " + todayTemp + "F in Dreamland without the sub-zero temperature and snow. Brrr!")  // Use double quotes for conjegations or single quotes with \ then single quotes

// convert to celcuis
let tempC = (todayTemp -32) * 5 / 9
console.log("Today's temperature is " + tempC.toFixed(2) + "C.")  // Add .toFixed(NUMBER) to removed decimal places
console.log(`Today's tempurature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F`)        //Template string with back-ticks

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`Today's class is ${department} ${classCode} ${className}`)                             //Template string with back-ticks
