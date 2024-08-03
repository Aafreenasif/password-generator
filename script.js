let UpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let LowerSet = "abcdefghijklmnopqrstuvwxyz"
let NumSet = "1234567890"
let SymbolSet = "~!@#%^&*(|$?/;"
const result = document.getElementById('result')
const llength = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
let allcharacter = UpperSet + LowerSet + NumSet + SymbolSet;

//for generating random num//
function GeneratingData() {
    return allcharacter[Math.floor(Math.random() * allcharacter.length)]
}
//checked//
function checked(password = " ") {
    if (uppercase.checked) {
        password += GeneratingData(UpperSet)

    }
    if (lowercase.checked) {
        password += GeneratingData(LowerSet)

    }
    if (numbers.checked) {
        password += GeneratingData(NumSet)

    }
    if (symbols.checked) {
        password += GeneratingData(SymbolSet)

    }
    if (password.length < llength.value) {
        return checked(password)

    }

    result.textContent = truncateString(password, llength.value)
}
checked()
generate.addEventListener("click",
    function () {
        checked()
    }
)
///for trimin the password length//
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
