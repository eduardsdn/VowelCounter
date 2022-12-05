
let form = document.getElementById("form")
form.addEventListener('submit', submitForm)

function submitForm(event){
    event.preventDefault()
    textInput = document.getElementById("textInput")
    textInputValue = textInput.value    
    checkVowels(textInputValue)
}

function checkVowels(textInputValue){
    let inputArr = textInputValue.split('')
    let vowelCounter = 0
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] === "a" || inputArr[i] === "e" || inputArr[i] === "i" || inputArr[i] === "o" || inputArr[i] === "u" || inputArr[i] === "y" ||
        inputArr[i] === "A" || inputArr[i] === "E" || inputArr[i] === "I" || inputArr[i] === "O" || inputArr[i] === "U" || inputArr[i] === "Y") {
            vowelCounter ++
        }
    }
    alert(vowelCounter)
}
