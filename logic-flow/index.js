/*
    At it's most basic, an if statement can look like the following 👇
 */

// true, false

// if (10 > 2) {
//     console.log('Yep');
// }
//
// // You can also add an else if like so
// if (10 > 2) {
//     console.log('Yep first if');
// } else if (11 > 10) {
//     console.log('Yep second if');
// }
//
// // You can also chain these "else ifs" as many times as you want.
// if (10 > 2) {
//     console.log('Yep 10 > 2');
// } else if (11 > 10) {
//     console.log('Yep 11 > 10');
// } else if (3 > 1) {
//     console.log('Yep 3 > 1');
// }
//
// // If you wish to check for whether multiple things are true, you'd have to have 3 separate if statements rather than one big if else statement, like so
// if (10 > 2) {
//     console.log('Yep');
// }
// if (11 > 10) {
//     console.log('Yep');
// }
// if (3 > 1) {
//     console.log('Yep');
// }
//
// // Additionally, if nothing is matched, you can chain a else{} onto the if statment like so 👇
// const age = 20;
// if (age > 70) {
//     console.log('In your seventies');
// } else if (age > 60) {
//     console.log('In your sixties');
// } else if (age > 50) {
//     console.log('In your 50s');
// } else {
//     console.log("nothing was true");
// }
//
// // and/or
//
// // || or
// // && and
//
// const name = 'wesscott';
// const scott = 'scott';
//
// if (name === "wes" || name === "scott") {
//     console.log("Cool name!");
// }
//
// if (name === "wes" && scott === "scott") {
//     console.log("Cool name!!!");
// }
//
// if (name.includes('wes')) {
//     console.log('Yes Includes')
// }
//
// // Next there is the concept of truthy and falsy.
// /*
//     0 // falsy
//     1 // truthy
//     -10 // truthy
//     undefined variable // falsy
//     Variable set to null // falsy
//     a variable set to "hello" - 10 NaN // falsy
//     empty string // falsy
//     full string // truthy
//     a string of "0" // truthy
//     empty array // truthy
//     empty object // truthy
//  */
//
// if ({}) {
//     console.log('test')
// } else {
//     console.log('emp-pty')
// }
//
// if (0) {
//     console.log('yes zeroooooo')
// }
//
// if (1) {
//     console.log('yes oneee')
// }
//
// const score = 0;
// if (score) {
//     console.log('There is a score already');
// } else {
//     console.log('No score yet');
// }
//
// const values = [[], [], -10, 1, 0, "", "full string", " ", undefined, NaN, null];
//
// console.group('truthy or falsy values');
//
// values.forEach(value => {
//     console.log(value);
//     if (value) {
//         console.log(value, 'is truthy');
//     } else {
//         console.log(value, 'is falsy');
//     }
// });

// console.groupEnd('');

// If you ever see the ! and !! being used in the if statements,
// that is because someone is taking the fact that you have a truthy or falsy value, and are coercing it into a true boolean.
const middle = "";

// console.log(!!middle);
// console.log(Boolean(middle));

// !middle
// !!middle

// Ternary
const count = 1;
const name = 'wes';

// let word;
// if (count === 1) {
//     word = 'item';
// } else {
//     word = 'items';
// }

// const word2 = count === 1 ? 'item' : 'items';

// const word = count === 1
//             ? name === 'wes'
//                 ? 'yes wes'
//                 : 'no wes'
//             : 'items';

let word;
if (count === 1) {
    if (name === 'wes') {
        word = 'yes wes'
    } else {
        word = 'no wes'
    }
} else {
    word = 'items'
}

// console.log(word);

// const count = 0;
// const word = count === 1 ? 'item' : 'items';
// const sentence = `You have ${count} ${word} in your cart`;
// console.log(sentence);

// console.log(10 == '10');
// console.log(10 === '10');

function check1(){
    return true;
}
function check2(){
    return true;
}
function check3(){
    return false;
}

// if (check1() && check2() && check3()) {
//     console.log('all checks passed');
// }

// function check2() {
//   return false;
// }
// if (check1() && check2() && check3()) {
//   console.log('all checks passed');
// } else {
//   console.log('Some checks failed');
// }


const isAdmin = true;

// 'use strict'

function showAdminBar() {
    console.log('yep admin')
}

// if (isAdmin)
//     showAdminBar();
// else showAdminBar();
// else if (true) console.log('')

// if (isAdmin) {
//   showAdminBar();
// }

// if (isAdmin) showAdminBar(); ok

// if (isAdmin)
// showAdminBar(); not ok
