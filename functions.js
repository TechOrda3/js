// Todo built-in
// console.log(Math.max(10, 12))

// parseFloat("20.34543543");
// parseInt("20.3243423");
// console.log(Date.now())

// navigator.vibrate(100);

// window.scrollTo({
//     top: 100,
//     left: 100,
//     behavior: "smooth",
// });

// var ne = 'dsadsa';

// doctorize('Nico');
// console.log(doctorize2('Test'))

// function expression
const doctorize = function (firstName) {
    return firstName;
};

// deccl
function doctorize2 (firstName) {
    console.log(arguments)
    return firstName;
}

const arrowFn = (isOk, isConsole, js = 'No Js') => {
    console.log(js)
    return isOk ? 'Ok' : 'No';
}

const funcWithObj = ({name, age, surname}) => {
    console.log(name, age, surname)
}

funcWithObj({name: 'test', age: 12, surname: 'test surname'});

arrowFn(true, false);

// console.log(doctorize('Nurtylek'))
//
// console.log(doctorize2('Nurtylek'))

// IIFE
(function () {
    console.log("Running the Anon function");
    return `Your are cool`;
})();
