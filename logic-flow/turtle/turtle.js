
const turtle  = document.querySelector('.turtle');

let x = 0;
let y = 0;
let speed = 5;

function handleKeyDown(event) {
    if (!event.key.includes("Arrow")) return;

    switch (event.key) {
        case 'ArrowUp':
            y = y - 1;
            break;
        case 'ArrowDown':
            y = y + 1;
            break
        case 'ArrowLeft':
            x =  x - 1;
            break
        case 'ArrowRight':
            x = x + 1;
            break
    }

    turtle.setAttribute("style", `--x: ${x * speed}px; --y: ${y * speed}px`);

    console.log(x, y)
}

window.addEventListener('keydown', handleKeyDown)
