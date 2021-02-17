function isGPA(code) {
    //GPA zip ranges 0 to 4
    if (code >= 0 && code <= 4) {
        return true
    } else {
        return false
    }
}

console.log(isGPA('0'))            // inside ' ' is a string, no quotes is a number. Will work either way
console.log(isGPA('1'))
console.log(isGPA('2'))
console.log(isGPA('4'))
console.log(isGPA(-1))
console.log(isGPA(15))

//Instructor example
function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
        /* Other way of completing:
            if (gpa >= 0 && gpa <= 4) {
                return true
            }
            return true */      // This takes place of else statement

            // Shorter version :  function validGPA(gpa) {
                                // return gpa >= 0 && gpa <= 4
                                // }
    }

}

console.log(validGPA(5))
console.log(validGPA(3))

