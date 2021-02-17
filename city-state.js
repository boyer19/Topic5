/*function cityStateAddress(city, state) {
    let address = city + ', ' + state.toUpperCase()       // mn -> MN
    return address
} */

function cityStateAddress(city, state) {
    let address = `${city} , ${state.toUpperCase()}`       // mn -> MN.    Template string with back-tick
    return address
}
console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)



