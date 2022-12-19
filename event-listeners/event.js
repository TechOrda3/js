
const btn = document.querySelector('.butts');
// const img = document.querySelector('.photo');

//
// document.addEventListener('visibilitychange', e => {
//     if (document.visibilityState === 'hidden') {
//     }
// })
//
//

// img.addEventListener('error', () => {
//     console.log('Error')
// })

// function listenBtnClick(e, type = 'delete') {
//     console.log(e)
// }

// let a = {};

// CallBack
// btn.addEventListener('click', listenBtnClick);
// btn.removeEventListener('click', listenBtnClick);

// const coolBtn = document.querySelector('.cool');
//
// function handleClick() {
//     console.log('Clicked')
// }
//
// btn.addEventListener('click', handleClick);
// coolBtn.addEventListener('click', handleClick);
//
// btn.removeEventListener('click', handleClick);
//

// const buyButtons = document.querySelectorAll("button.buy");

// console.log(buyButtons)
// buyButtons.addEventListener('click', e => console.log(e))

// document.querySelector('input').addEventListener('input', e => {
//     console.log(e.currentTarget.value)
// });

// buyButtons.forEach(el => {
//     el.addEventListener('click', function (e) {
//         e.preventDefault()
//         console.dir(e.currentTarget);
//     });
// });

// window.addEventListener("click", function(event) {
//         console.log("you clicked the window");
//         // console.log(event.target);
//         // console.log(event.type);
//         // console.log(event.bubbles);
//     },
//     { capture: true }
// );

// const photoEl = document.querySelector(".photo");
// photoEl.addEventListener("mousemove", function(e) {
//     console.log(e.currentTarget);
// });

// document.querySelector('a').addEventListener('click', e => {
//     e.preventDefault();
// });

// document.querySelector('#form').addEventListener('submit', (e) => {
//     // e.preventDefault();
// })

// const outer = document.querySelector('.outer');
// const inner = document.querySelector('.inner');
const innerBtn = document.querySelector('.inner__btn');
// //
function listen(e) {
    // e.stopPropagation();
    console.log(e);
    // console.log(e.currentTarget);
}
//
// // outer.addEventListener('click', listen);
// inner.addEventListener('click', listen)
innerBtn.addEventListener('click', listen)

// document.addEventListener('keypress', e => {
//     console.log(e);
// })

// document.addEventListener('contextmenu', e => {
//     // e.preventDefault();
// });

const myEvent = new CustomEvent('testEvent', { bubbles: false });

const customEvent = new Event('click', { bubbles: true  })

// document.querySelector('.custom').addEventListener('click', () => {
//     window.dispatchEvent(myEvent);
// })
//
// window.addEventListener('testEvent', e => {
//     console.log(e.bubbles)
// })

// const accept = document.getElementById('accept');
//
// const intersectionObserver = new IntersectionObserver(([e]) => {
//     console.log('test')
//     if (e.isIntersecting) {
//         accept.removeAttribute('disabled');
//         intersectionObserver.disconnect();
//     }
// });
//
// intersectionObserver.observe(accept);


