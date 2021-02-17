// pre-requisites for Android programming  - C# or Java

let takenCSharp = false                     // Change the value to check
let takenJava = true                        // Change the value to check

if (takenCSharp || takenJava) {                                     // OR statement ||
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# or Java')
}



// Must be at least 30 years old
//Must have been a US Citizen for 9 or more years
// Must live in the state you want to represent

let age = 35                                    // Change variable to check
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >=9 && stateOfResidence == stateWantToRepresent) {           // Using === verifies that the values are the same and the type is the same
    console.log('You are qualified to run for a Representative Position.')
} else {
    console.log('You do not meet the requirements for Representative.')
}
