// const clickMeBtn = document.querySelector(".butts");
// const coolBtn = document.querySelector('.cool');
//
const innerBtn = document.querySelector('.inner__btn');
const innerDiv = document.querySelector('.inner');

const input = document.querySelector('input');

// input.addEventListener('keyup', e => {
//     console.log(e)
// });

// innerBtn.addEventListener('click', e => {
//     // e.preventDefault();
//     console.log(e.target)
// });
//
// innerDiv.addEventListener('click', e => {
//     console.log(e.target)
// });

// const form = document.querySelector('#form');

// document.querySelector('a').addEventListener('click', e => {
//     e.preventDefault();
// })

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log(event)
// });

// const listen = event => {
//     const element = event.target;
//     // element.setAttribute('disabled', true)
//     // element.disabled = true
//     console.log('event')
// }
//
// clickMeBtn.addEventListener('click', listen);
//
// coolBtn.addEventListener('click', () => {
//     console.log('removed event listener')
//     clickMeBtn.removeEventListener('click', listen)
// })

// window.addEventListener('click', e => {
//     console.log('Clicked Window')
// }, {
//     capture: true
// })

// innerBtn.addEventListener('click', (e) => {
//     console.log('target:', e.target);
//     console.log('currenTarget: ', e.currentTarget)
// }, {
//     // capture: true
//     // once: true
// });

// const customEvent = new CustomEvent('extraEvent', {
//     bubbles: false,
//     detail: {
//         username: 'test',
//         surname: 'test surname'
//     }
// });
//
// // input.dispatchEvent(customEvent);
//
// input.addEventListener('extraEvent', e => {
//     console.log(e)
// })

// window.addEventListener('scroll', e => {
//     console.count('Res');
//
// })

// document.querySelector('.big').addEventListener('resize', e => {
//     console.log(e)
// })

// const acceptBtn = document.getElementById('accept');
//
// const intersectionObserver = new IntersectionObserver(entries => {
//     console.log('entries');
//     if (entries[0].isIntersecting) {
//         acceptBtn.disabled = false;
//         intersectionObserver.disconnect()
//     }
// }, {
//     root: null
// });
//
// const resizeObserver = new ResizeObserver(entries => {
//     console.log(entries)
// });
//
// resizeObserver.observe(document.querySelector('.big'));
// intersectionObserver.observe(acceptBtn);

// intersectionObserver.observe()
