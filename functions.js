function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world', 'hello'))              // With two arguments. JavaScript will ignore the extra argument. With no argument will not work
let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {     // decimalPlaces is an option perameter, which calls the number of decimal places
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) {                        // Undifined values are considered to be false
        return celsius.toFixed(decimalPlaces)  // to set decimal places- .toFixed(--NUMBER--) put number in () and remove function decimal places line 10
    } else {
        return celsius
    }
}

let todayTemp = 75
todayCelsius = f_to_c(todayTemp, 4)             // 4 decimal places
console.log(todayCelsius)