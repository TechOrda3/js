// const person = {
//     name: "wes",
//     age: 100
// };

// Immutable, Mutable

const age = 100;
const name = 'Nico';

const person = new Object({
    name,
    age,
    "cool-dude": true,
    "really cool": false,
    "777": true,
    dog: "snickers",
    clothing: {
        shirts: 10,
        pants: 2
    }
});

// Spread operator Shallow Copy
// Deep cloning

const personCopyFirst = Object.assign({}, person);

const personCopy = {...person};

personCopy.name = 'Changed PErson Copy';
personCopy.clothing.pants = 100_00;

// Object.freeze(person);

// person.name = 'Nico Changed';

// console.log(Object.entries(person))

console.log(person);

// const wesFroze = Object.freeze(wes); Object methods

// Spread, Object.assign
