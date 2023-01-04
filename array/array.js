const toppings =
    ['Mushrooms',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chilles',
        'Bacon',
        'Pickles','Onions', 'Cheese'
    ];
// console.log(toppings.length)
    // [0, 1, 2, ]
const students = [
    {
        id: "11",
        first_name: "Dall",
        last_name: "Puckring"
    },
    {
        id: "2958",
        first_name: "Margarete",
        last_name: "Brandi",
    },
    {
        id: "565",
        first_name: "Bendicty",
        last_name: "Woodage",
    },
    {
        id: "3a16",
        first_name: "Micki",
        last_name: "Mattes",
    },
    {
        id: "f396",
        first_name: "Flory",
        last_name: "Gladeche",
    },
    {
        id: "de5f",
        first_name: "Jamill",
        last_name: "Emilien",
    },
    {
        id: "54cb",
        first_name: "Brett",
        last_name: "Aizikowitz",
    },
    {
        id: "9135",
        first_name: "Lorry",
        last_name: "Smallman",
    },
    {
        id: "978f",
        first_name: "Gilly",
        last_name: "Flott",
    },
];

const faces = ['🚀', '😄', '😂'];

const hasRaketa = faces.some(face => face === '🚀');
const hasEggs = toppings.every(topping => topping === 'Eggs')

// console.log(hasEggs);

const bacon = toppings.find((topping, index, arr) => topping === 'Bacon');
const bret = students.find((student, index) => index === 6);

const filteredToppings = toppings.filter(topping => topping === 'Avocado');

const copyToppings = [...toppings];
const slicedToppings = toppings.slice(0, 4);

const mappedStudents = students.map((student) => ({
    ...student,
    fullName: student.first_name + ' ' + student.last_name
}));

// toppings.sort()

const collator = new Intl.Collator();

const nums = [10, 1, 2, 4, -1];

// console.log(nums.sort((a, b) => a - b))

students.sort((a, b) => collator.compare(a.first_name, b.first_name))


// console.log(students);





























faces.splice(1, 0, '🔥')

// console.table(faces);
// console.log(faces.length)
// array
const arr = [];
const arr2 = new Array(10);
const arr3 = Array.from({length: 10});

// console.log(arr3)

arr.push(0);
arr.push(10);
arr.push(12);
arr.push(12_000);
arr.push(54);

arr.unshift(-1);
arr.unshift(12312)
arr.unshift(3012)

// console.log(arr)
// console.table(toppings)
// console.log(toppings[2]);
// console.log(toppings[toppings.length - 1]);
// console.log(toppings.at(-1));

// const lastRemovedItem = toppings.pop();
// console.table(toppings)
// console.log(lastRemovedItem)
//
// const firstRemovedItem = toppings.shift();
// console.table(toppings)
// console.log(firstRemovedItem);
//
// const avocadoIndex = toppings.findIndex((topping, index, arr) => topping === 'Avocado');
// console.log(avocadoIndex);
//
// // startIndex, 4, 5, 6 swap
// toppings.splice(avocadoIndex, 1, 'Apple');
// console.table(toppings)

// for (let i = 0; i < faces.length; i++) {
//     // console.log(faces[i])
//     if (i === 1) continue;
//
//     if (i === 2) break;
//     console.log(faces[i])
// }

// for (let i = faces.length - 1; i >= 0; i--) {
//     console.log(faces[i])
// }

// const [index, topping] = ['0', 'Mushrooms'];

// testArr[0]
// testArr[1]

// for (const [index, topping] of Object.entries(toppings)) {
//     console.log(index, topping)
// }

// const obj = {
//     name: 'Test',
//     key: 'Key'
// }
//
// for (const objKey in obj) {
//     console.log(obj[objKey])
// }

// let i = 11;
// //
// while (i <= 10) {
//     console.log('I: ', i)
//     i++;
// }
//
// do {
//     console.log('i')
//     i++;
// } while (i < 10)


const multiDimArr = [[1, 2], [32, 4], [45, 4], [[3,4], [32, 4]]];

// for (let i = 0; i < testArr.length; i++) {
//     for (let j = 0; j < testArr[i].length; j++) {
//         console.log(testArr[i][j])
//     }
// }

// testArr.flat(3);
// console.log(multiDimArr.flat(2))

const nums2 = [1, 2, 3, 4];
const nums3 = [12, 22, 32, 42];

const newArr = [...nums2, ...nums3];
const newArr2 = nums2.concat(nums3);

console.log(newArr);
console.log(newArr2)

const total = nums2.reduce((acc, curr) => {
    return acc + curr;
}, 0);

let total2 = 0;
for (let i = 0; i < nums2.length; i++) {
    total2 += nums2[i];
}

console.log(total2)
console.log(total);

students.forEach(student=> {
    console.log(student)
});

