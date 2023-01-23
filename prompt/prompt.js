function destroyPopup(popup) {
    popup.remove();
}

function ask({title, cancel = false}) {
    return new Promise(resolve => {

        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.classList.add('open');

        popup.insertAdjacentHTML(
            'afterbegin',
            `<fieldset>
<label>${title}</label>
<input name="input"/>
<button type="submit">Submit</button>
</fieldset>`
        );

        if (cancel) {
            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.textContent = 'Cancel';
            popup.appendChild(cancelButton);

            cancelButton.addEventListener('click', () => {
                resolve(null);
                destroyPopup(popup);
            })
        }

        popup.addEventListener('submit', e => {
            e.preventDefault();
            const inputValue = e.target.input.value;
            resolve(inputValue);

            destroyPopup(popup);
        }, { once: true });

        document.body.appendChild(popup);
    })
}

const questions = [
    {
        title: 'What is your name?',
    },
    {
        title: 'What is your age?',
        cancel: true
    },
    {
        title: 'What is dogs name?',
    }
];

// Promise.all(questions.map(question => ask(question))).then();

// questions.forEach(async(question) => {
//     await ask(question);
// });

async function askMany() {
    for (const question of questions) {
        const answer = await ask(question);
        console.log(answer)
    }
}

askMany();

