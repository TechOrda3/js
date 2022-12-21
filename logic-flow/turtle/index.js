'use strict';

const turtle = document.querySelector('.turtle');

let x = 0;
let y = 0;

const SPEED = 20;

function moveTurtle(event) {
    const key = event.key;

    // if (!key.includes('Arrow')) return;

    // if (event.key === 'ArrowUp') {
    //
    // } else if (event.key === 'ArrowDown') {
    //
    // }

    // 0 + 1

    switch (key) {
        case 'ArrowUp':
            y = y - 1;
            break;
        case 'ArrowDown':
            y = y + 1;
            break;
        case 'ArrowLeft':
            x = x - 1;
            break;
        case 'ArrowRight':
            x = x + 1;
            break;
        default:
            console.log('default')
            break;
    }

    turtle.setAttribute('style', `
        --x: ${x * SPEED}px;
        --y: ${y * SPEED}px
    `)
}

window.addEventListener('keydown', moveTurtle)
