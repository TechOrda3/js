/*
    It is not actually just the HTML that you have written, it takes that, converts it to the Document Object Model, and it allows us to interface with the DOM via JavaScript.

    We can do things like listen for clicks and scrolls.
    We can add, move, remove elements from that page or things like text, images, etc.
    We can add and remove CSS classes from elements which can trigger animations.
    We can fetch new data.
    We can play music and video.
    We can add any type of interaction to the page and that is done by writing JavaScript that interfaces with the DOM (the things that are on the page, the elements on the page).

    Querying
    1. getElementById ans so on
 */

// function init() {
//     const p = document.querySelector('p');
//     console.log(p);
// }
//
// document.addEventListener('DOMContentLoaded', init);

const mainTitle = document.getElementById('main-title');
const header = document.querySelector('header')
const listItems = document.querySelectorAll('.list-item');
const listItemsByTag = document.getElementsByTagName('li');

// console.log(listItemsByTag);
// console.log(header.innerHTML);
// console.log('DOMJS')
// mainTitle.innerText = 'maintitle Changed';
// document.querySelector('input').value = 'Value Changed!'
