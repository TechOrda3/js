const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");
// const buttons = list.querySelectorAll('button');
const items = [];
function displayItems() {
    const html = items.map((item)=>`<li>${item.name}</li>`).join("");
    list.insertAdjacentHTML("afterbegin", html);
}
function handleSubmit(event) {
    event.preventDefault();
    const name = event.currentTarget.item.value;
    const item = {
        name,
        isCompleted: false,
        id: crypto.randomUUID()
    };
    items.push(item);
    event.target.reset();
    displayItems();
}
shoppingForm.addEventListener("submit", handleSubmit);

//# sourceMappingURL=index.2ba81600.js.map
