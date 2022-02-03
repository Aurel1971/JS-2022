document.querySelector('input[type = "button"]').addEventListener('click', check)
var result = document.querySelector('#result')


// genereaza un numar aleatoriu intre o si 100
var max = 100
var chosenNumber = randomNumber(max)

// query
// un query returneaza o valoare (folosind return)
function randomNumber(max) {
    max++
    return Math.round(Math.random() * max)
}
// max = ? 

//comand
//comanda nu returneaza nimic
function check() {
    // value reprezinta valoarea data in input
let checkedNumber = document.querySelector('#number').value

if (chosenNumber == checkedNumber) {
result.innerText = 'Ai ghicit!'
}else if (chosenNumber > checkedNumber) {
    result.innerText = 'Prea mic!'
}else {
    result.innerText = 'Prea mare!'
}

}