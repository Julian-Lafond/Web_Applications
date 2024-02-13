import menuArray from './data.js';

let get_menu = document.getElementById("menu");
let addPlaceholder = document.querySelector(".add-placeholder");
let addedItemsContainer = document.getElementById("added-items-container");

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

function displayItems(itemsId) {
    const idObj = menuArray.filter(function (item) {
        return item.id == itemsId
    })[0]
    addedItemsContainer.innerHTML += `
    <div class = "checkout">
        <ul>
            <li>${idObj.name}</li>
        </ul>
        <p>${idObj.price}</p>
    </div>
    `
}



