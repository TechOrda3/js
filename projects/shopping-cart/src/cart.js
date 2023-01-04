const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");
// const buttons = list.querySelectorAll('button');

const itemsUpdated = 'itemsUpdated';
const itemsKey = 'items'

let items = [];

function displayItems() {
    const html = items.map(item => `
        <li>
            <input type="checkbox" id="${item.id}" ${item.isCompleted && 'checked'}/>
            <span>${item.name}</span>
            <button value="${item.id}">&times;</button>
        </li>
    `).join('');
    list.innerHTML = html;
}

function setDataToLocalStorage() {
    localStorage.setItem(itemsKey, JSON.stringify(items));
}

function restoreDataFromLocalStorage() {
    const storedItems = JSON.parse(localStorage.getItem(itemsKey));
    if (storedItems?.length) {
        items.push(...storedItems);
        list.dispatchEvent(new CustomEvent(itemsUpdated));
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.currentTarget.item.value;

    if (!name) return;

    const item = {
        name,
        isCompleted: false,
        id: crypto.randomUUID()
    };
    items.push(item);
    event.target.reset();
    list.dispatchEvent(new CustomEvent(itemsUpdated));
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent(itemsUpdated));
}

function markAsCompleted(id) {
    items = items.map(item => item.id === id ? {
        ...item,
        isCompleted: !item.isCompleted
    }: item);
    list.dispatchEvent(new CustomEvent(itemsUpdated));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener(itemsUpdated, displayItems);
list.addEventListener(itemsUpdated, setDataToLocalStorage);

window.addEventListener('load', restoreDataFromLocalStorage);

window.addEventListener('storage', e => {
    items = JSON.parse(e.newValue);
    list.dispatchEvent(new CustomEvent(itemsUpdated));
});

list.addEventListener('click', e => {
    if (e.target.matches('button')) {
        deleteItem(e.target.value)
    }

    if (e.target.matches('input')) {
        markAsCompleted(e.target.id)
    }
});
