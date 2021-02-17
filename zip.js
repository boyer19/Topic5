function isMinnesotaZip(code) {
    //MN zip ranges 55001 and 56763
    if (code >= 55001 && code <= 56763) {               // && is the AND operator. || is OR (which will make all statements true)
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip('55403'))            // inside ' ' is a string, no quotes is a number. Will work either way
console.log(isMinnesotaZip('55000'))
console.log(isMinnesotaZip('56764'))
console.log(isMinnesotaZip('9999999'))
console.log(isMinnesotaZip(-1))

