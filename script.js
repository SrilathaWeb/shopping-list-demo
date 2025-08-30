
window.onload = function () {
    initShoppingList();
}
function initShoppingList() {
    let form = document.getElementById("item-form")
    form.addEventListener("submit", function (event) {
       handleItemForm(event, form);
    })
}
function handleItemForm(event, form) {
    if(event.preventDefault){ // automatic submitting prevention
        event.preventDefault();
    }
    addItemToShoppingList();
    return false;
}
function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0, 100000000);
    let itemHtml = createListItem(itemName,itemAmount,id);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
    setDeleteButtonEvent(id)
}
function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
        console.log("deleted");
        deleteItem(id)
    })
}
function deleteItem(id) {
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);
}
function createListItem(itemName,itemAmount,id) {
    return `<li id="item${id}">${itemName.value} - ${itemAmount.value} 
            <button type="button" id="button${id}">Delete Item</button>
            </li>`;
}
//this function generates the random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}