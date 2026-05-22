let firstNumber = null
let secondNumber = null
let step = 0
let operation = null
let result = 0

let numArray = []
let secondNumArray = []

const display = document.getElementById('display')

function getNumber(num) {
    if (step === 0 || step === 1) {
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(""))
        display.value = firstNumber
    } 
    else if (step === 2) {
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(""))
        display.value = secondNumber
    }
}

function getOperator(op) {
    if (firstNumber === null) return 
    operation = op
    step = 2
}

function clearDisplay() {
    display.value = "0"
    firstNumber = null
    secondNumber = null
    operation = null
    step = 0
    result = 0
    numArray = []
    secondNumArray = []
}

function calculateEquals() {
    if (firstNumber === null || secondNumber === null){
        display.value = "ERRO"
        setTimeout(() => {clearDisplay();}, 1000);
        return
    }

    if (operation === '+') {
        result = firstNumber + secondNumber
    } 
    else if (operation === '-') {
        result = firstNumber - secondNumber
    } 
    else if (operation === '*') {
        result = firstNumber * secondNumber
    } 
    else if (operation === '/') {
        if (secondNumber === 0) {
            display.value = "ERRO"
            setTimeout(clearDisplay, 1500)
            return
        }
        result = firstNumber / secondNumber
    }

    display.value = result

    firstNumber = result
    secondNumber = null
    numArray = [result.toString()]
    secondNumArray = []
    operation = null
    step = 0
}