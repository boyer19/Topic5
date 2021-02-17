// creat an object - contains properties
// PowerPoint: Web-Week-5-JavaScript-Arrays-And-Objects-And-JSON-Fall-20201.pptx	slide 56
// properties are name: value pairs
let user = {username: 'Zoe', password: 'kittens'}

console.log(user.username)      // Zoe
console.log(user['username'])   // Zoe

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

//Change object values     slide 60
user.password = 'elephant'
user.username = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)       
// Also use 
    console.log(`New password is ${user.password}`)  // Back-tick

console.log(user.username)
console.log(user.password) 



// Make a new property in the object    slide 61
user.email = 'matt.boyer@whatever.com'
console.log(user)
console.log(user.email)

// Nested objects slide 62
// Create an object. Values can be strings, numbers, lists, other objects
var users = {
    username: 'Zoe',
    password: 'kittens',
    userid: 1,
    roles: ['user', 'admin'],   // roles value is an array
    contact: {                  //  contact value is another object, curly brackets
        phone: '123-456-7890',
        office: 'T.1400'
    }
}

users.userid = 101               // Changed userid
console.log(users)

console.log('User roles are: ', users.roles)     // Prints roles array
console.log('User roles are: ', users['roles'])      //Prints roles array, other syntax
console.log('Users first role is ' + users.roles[0])     // First role

// All of the user's roles
console.log('All of the user roles are: ')
users.roles.forEach(function(role) {
    console.log(role)
})

users.contact.office = 'M.1234'                                 // Change office object
console.log('New office is ' + users.contact.office)

console.log('User phone number is ' + users.contact.phone)       // Access nested values

// Add another attribute - even though it's not defined in our object
users.email = 'matt.boyer@whatever.com'                         // Add object in users

users.salary = '$81,000'                                        // Add object in users
console.log(users)
          
users.roles.push('server admin')                            // Makes a new property in roles. Push
users.contact.location = 'Minneapolis'                         // Adds property to contact
console.log(users)
users.username = 'Matt'                                     // Modifys username
console.log(users)
