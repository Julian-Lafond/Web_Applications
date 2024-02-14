import menuArray from './data.js';

let get_menu = document.getElementById("menu");
let addedItemsContainer = document.getElementById("added-items-container");
let totalItems = document.getElementById("total-items-container")
let add = '';

// Loop through each item in the menuArray
menuArray.forEach(item => {
    // Access the properties of the current item
    const name = item.name;
    const ingredients = item.ingredients;
    const price = item.price;
    const emoji = item.emoji;
    const id = item.id;

    // Concatenate the ingredients into a string
    const ingredientsString = ingredients.join(", "); // Join with a comma and space
    add += `
    <div class="container">
        <p class="emoji">${emoji}</p>
        <div class="menuItems">
            <h1>${name}</h1>
            <h3>${ingredientsString}</h3>
            <h2>$${price}</h2>
            <hr>
        </div>
        <div class="add">
            <button class="add-item" data-id="${id}">Add</button> 
        </div>
    </div>
    `;

});

// Append dynamically generated menu items to the menu container
get_menu.innerHTML = add;

get_menu.addEventListener('click', function (e) {
    if (!addedItemsContainer.querySelector('.orders')) {
        addedItemsContainer.innerHTML = `<h3 class="orders">Your Order</h3>`;
    }
    if (e.target.dataset.id) {
        displayItems(e.target.dataset.id)
    }
    console.log(e.target.dataset.id)
})

let total = 0
function displayItems(itemsId) {

    const idObj = menuArray.find(item => item.id == itemsId);
    total += idObj.price
    addedItemsContainer.innerHTML += `
    <div class="checkout">
        <ul>
            <li>${idObj.name}</li>
        </ul>
        <div class="price">
            $${idObj.price}
        </div>
    </div> 
    `;
    displayTotal(total)

}




function displayTotal(total) {
    totalItems.innerHTML = `
    <hr class = "checkout">
    <div class = "total">
        <h5>Total Price:</h5>
        <div class = "price">
            <h5>$${total}</h5>
        </div>
    </div>
    `
}