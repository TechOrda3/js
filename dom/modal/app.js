const addMovieBtn = document.getElementById('add-movie');
const movieAddModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--passive");
const addItemsBtn = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--success");
const inputs = document.querySelectorAll('input');
const entryText = document.getElementById('entry-text');
const movieList = document.querySelector("#movie-list");
const deleteModal = document.querySelector("#delete-modal");
const deleteModalCancelBtn = document.querySelector("#delete-modal > div > button.btn.btn--passive");
const deleteModalYesBtn = document.querySelector("#delete-modal > div > button.btn.btn--danger");

const items = [];

const closeModal = (type = 'add') => {
    if (type === 'delete') {
        deleteModal.classList.remove('visible');
    } else {
        movieAddModal.classList.remove('visible');
    }
    backdrop.classList.remove('visible');
}

addMovieBtn.addEventListener('click', () => {
    movieAddModal.classList.add('visible');
    backdrop.classList.add('visible');
});

deleteModalCancelBtn.addEventListener('click', () => closeModal('delete'))

cancelBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

const confirmation = (id) => {
    backdrop.classList.add('visible');
    deleteModal.classList.add('visible');

    deleteModalYesBtn.addEventListener('click', () => {
        const idx = items.findIndex(item => item.id === id);
        const listItems = document.querySelectorAll('.list-item');
        movieList.removeChild(listItems[idx]);
        deleteModal.classList.remove('visible');
        backdrop.classList.remove('visible')
    })
}

addItemsBtn.addEventListener('click', () => {
    const newMovie = {
        id: Math.random().toString(),
        title: inputs[0].value,
        imageUrl: inputs[1].value,
        rating: inputs[2].value
    }
    items.push(newMovie);

    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    closeModal()

    if (items.length) {
        entryText.remove();

        const ulElement = document.createElement('li');
        ulElement.className = 'list-item';
        ulElement.innerHTML = `
            <p>${newMovie.title}</p>
            <span>❌</span>
        `
        ulElement.addEventListener('click', () => confirmation(newMovie.id))
        movieList.append(ulElement);
    }
});
