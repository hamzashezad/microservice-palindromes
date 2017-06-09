class Palindrome {
    check (str) {
        const newStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
        const revStr = newStr.split('').reverse().join('')

        return revStr === newStr
    }
}

module.exports = Palindrome
