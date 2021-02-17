/*PowerPoint Week-5-JavaScript-Arrays-And-Objects-And-JSON-Fall-20201.pptx	slide 40 */
let animals = ['lion', 'tiger', 'cheetah']      //array list

console.log(animals)                            //Prints all of array animals
console.log(animals[1])                         //Prints array item 1, tiger
console.log(animals[1000])                      //Prints array item 1000, nonexist

animals[6] = 'giraffe'                          // Sets list item 6 as giraffe
console.log(animals)                            //Prints array list with modification to 6

//Assign elements to the array
animals[1] = 'zebra'                            //Sets list item 1 to zebra
console.log(animals)
console.log(animals[1])                         //Prints element 1

//Push elements to array to add to end of list
animals.push('elephant')
console.log(animals)
    //Add to beginning of array
animals.unshift('deer')
console.log(animals)
    //Remove from beginning
let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)
    //Remove from end
animals.pop()                                   //Removes last element
let lastAnimal = animals.pop                    //Allows the last element to be called in console
console.log(lastAnimal)                         //Shows last element removed
console.log(animals)                            //Prints list items
//Reverse the order of the elements in array
animals.reverse()
console.log(animals)
//Arrange array in ascending order
animals.sort()
console.log(animals)
//Count length of array 
let numberOfAnimals = animals.length
console.log(numberOfAnimals)                    //Prints number value for length of array
//Check if something is in an array
console.log(animals.indexOf('lion'))
console.log(animals.indexOf('walrus'))          //Prints -1 for items not in array
    //Condition
    if (animals.indexOf('walrus') == -1) {
        console.log('Walrus is not in the array')
    }
//  Test if something is in the array
if (animals.includes('cheetah')) {
    console.log('Cheetah is in the array')
}
// Connect together all of the items in the array into a string
 console.log(animals.join(' * '))                        //No argument() joins with a default or a , 

animals.forEach( function(animal) {
    console.log(animal.toUpperCase())
})

//print the length of each animal name
animals.forEach(function(animal) {
    console.log(animal.length)
})                                                      //Add the last ending parenthesis at the end

//Create an array that contains an arrays length #'s
animals.push('alligator')                               //adds an animal to the animals array

let animalNameLength =[]
animals.forEach(function(animal) {
    let length = animal.length
    animalNameLength.push(length)

})
console.log(animalNameLength)

//Lab for student list form
let name = studentName.value
let gpa = studentGPA.value
let id = studentID.value

let errors = []
if (!name) {
    errors.push('Enter student name')
}

if (!id) {
    errors.push('Enter student ID')
}

if (!gpa || gpa < 0 || gpa > 4 ) {
    errors.push('Enter GPA between 0 and 4')
}

if (errors.length > 0) {
    let errorMsg = errors.join('\n')
    alert(errorMsg)
    return
}