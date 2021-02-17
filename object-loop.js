let furnitureColors = { couch: 'green', table: 'blue', chair: 'red'}

//looping over an object
for (let furniture in furnitureColors) {
    let color = furnitureColors[furniture]
    console.log(`The ${furniture} is the color ${color}`)
}

let user = {
    username: 'clara',
    password: 'zebra'
}

for (let name in user) {
    console.log(name, user[name])
}

console.log(user.username)
console.log(user['username'])
