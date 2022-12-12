// let name = 'Extra';
// let magicNumber = 100;

let result = 0;

let text = "Text";
let secondText = 'Text';
let thirdText = `text: ${text} secondText: ${secondText}`;
let alternative = 'text: ' + text + ' ' + 'secondText ' + secondText

// let name = 'Extra 1';
// let secondName = "EXTRA 2";
// let thirdName = `firstName ${name} secondName ${secondName}`;
// let fourthName = "firstname " + name + " secondName " + secondName;

// let user = 'Nico', surname = 'Nico', lastName = 'lastName';
//
// let user = 'Nico';
// let username = 'Nico';
// let lastname = 'lastname'

/*
    Данияр
    Сабиров
    Сивонин
    Каримова
    Куришбеков
    Адилбек
    Чалгымбаев
    Гулим
 */

/*
    1. return
    2. void
 */

// 0 + '12' = '012';

// '12' => 12

function reset() {
    userInput.value = null;
    userInput.focus()
}

function add() {
    const currentText = `result ${result} currentUserInput: ${userInput.value}`
    result = result + +(userInput.value);
    outputResult(result, currentText);
    reset();
}

function multiply() {
    const currentText = `result ${result} currentUserInput: ${userInput.value}`
    result = result * +(userInput.value);
    outputResult(result, currentText);
}

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply)

document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
});
