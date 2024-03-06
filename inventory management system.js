let items = [];

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;

    if (itemName && quantity) {
        items.push({ itemName, quantity });
        renderItems();
        document.getElementById('itemName').value = '';
        document.getElementById('quantity').value = '';
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}

function editItem(index) {
    const newQuantity = prompt('Enter new quantity:');
    if (newQuantity !== null) {
        items[index].quantity = newQuantity;
        renderItems();
    }
}

function searchItems() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredItems = items.filter(item =>
        item.itemName.toLowerCase().includes(searchTerm)
    );
    renderItems(filteredItems);
}

function sortItems() {
    const sortBy = document.getElementById('sort').value;
    if (sortBy === 'name') {
        items.sort((a, b) => a.itemName.localeCompare(b.itemName));
    } else if (sortBy === 'quantity') {
        items.sort((a, b) => a.quantity - b.quantity);
    }
    renderItems();
}

function renderItems(itemsToRender = items) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    itemsToRender.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <span>${item.itemName} - ${item.quantity}</span>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(itemElement);
    });
}
